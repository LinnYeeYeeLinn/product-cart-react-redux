import React from 'react';
import {AiFillDelete} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeFromFav } from '../services/productSlice';

const ProductCard = ({i}) => {
    const dispatch = useDispatch();
  return (
    <div className='card' style={{width: '18rem'}}>
        <div className="card-body">
            <img src={i?.image} height='100px' className='d-block mx-auto' alt="" />
            <p>{i?.title.substring(0,20)}</p>
            <h3>${i?.price}</h3>
            <div className="d-flex gap-2">
                <button onClick={() => dispatch(removeFromFav(i))} className="btn btn-outline-danger btn-sm">
                    <AiFillDelete />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard