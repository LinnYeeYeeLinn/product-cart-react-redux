import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import {useNavigate} from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);

  const increasePrice = (price) => {
    setTotal(total + price);
  }

  const decreasePrice = (price) => {
    setTotal(total - price);
  }

  const calculatePrice = () => {
    setTotal(cart.reduce((a,c) => a + c?.price, 0));
  }

  useEffect(() => {
    calculatePrice();
  }, [cart])

  return (
    <div>
      {cart.length > 0 ? (
        <div className="row">
          <div className="col-7">
            <div>
              {cart?.map(cart => <CartItem key={cart?.id} cart={cart} increasePrice={increasePrice} decreasePrice={decreasePrice} /> )}
            </div>
          </div>
          <div className="col-5">
            <div className='shadow-lg p-4'>
              <h3 className='text-info'>Total Price</h3>
              <h2 className="text-warning">${total.toFixed(2)}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className='border border-1 p-5 rounded-lg shadow-md text-center w-50 mx-auto'>
          <h2 className='mb-4'>Your cart is Empty!</h2>
          <button className="btn btn-info" onClick={() => navigate('/')}>Go Shopping</button>
        </div>
      )}
    </div>
  )
}

export default Cart