import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import {AiFillHeart} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToFav } from '../services/productSlice';
import { addToCart } from '../services/cartSlice';

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
  return (
    <div className='card' style={{width: '15rem'}}>
        <div className="card-body">
            <img src={product?.image} height='100px' className='d-block mx-auto' alt="" />
            <p>{product?.title.substring(0,20)}</p>
            <h3>${product?.price}</h3>
            <div className="d-flex gap-2">
                <button onClick={() => dispatch(addToCart(product))} className="btn btn-primary btn-sm">
                    <FaShoppingCart />
                </button>
                <button onClick={() => dispatch(addToFav(product))} className="btn btn-outline-danger btn-sm">
                    <AiFillHeart />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard