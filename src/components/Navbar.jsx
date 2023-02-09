import React from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import {AiFillHeart} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cart = useSelector(state => state.cart.cart);
  return (
    <nav className="navbar navbar-expand-lg mb-4 position-sticky top-0 bg-white z-3">
        <div className="container-fluid">
            <Link to='/'>
                <h4 className='fw-semibold text-primary '>MMS</h4>
            </Link>
            <div className="d-flex gap-2">
                <Link to='/cart'>
                    <button className="btn btn-primary btn-sm">
                        <FaShoppingCart /> {cart?.length}
                    </button>
                </Link>
                <Link to='/fav'>
                    <button className="btn btn-outline-danger btn-sm">
                        <AiFillHeart />
                    </button>
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
