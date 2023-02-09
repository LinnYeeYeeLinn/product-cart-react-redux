import React, { useState } from "react";
import { removeFromCart } from '../services/cartSlice';
import { AiFillDelete, AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
import { useDispatch } from "react-redux";

const CartItem = ({ cart, increasePrice, decreasePrice }) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);

    const increaseCount = () => {
        setCount(pre => pre + 1);
        increasePrice(cart?.price);
      }
    
      const decreaseCount = () => {
        if(count > 1){
          setCount(pre => pre - 1);
          decreasePrice(cart?.price);
        }
      }

  return (
    <div className="border border-1 p-3 rounded-md mb-2">
      <img src={cart?.image} height="100px" alt="" />
      <p>{cart?.title}</p>
      <h4>${cart?.price * count}</h4>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-2 align-items-center border border-1 p-2 rounded">
          <AiFillMinusSquare
            onClick={decreaseCount}
            className="fs-4"
            style={{ cursor: "pointer" }}
          />
          <span>{count}</span>
          <AiFillPlusSquare
            onClick={increaseCount}
            className="fs-4"
            style={{ cursor: "pointer" }}
          />
        </div>
        <button
          onClick={() => dispatch(removeFromCart(cart))}
          className="btn btn-danger btn-sm"
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
