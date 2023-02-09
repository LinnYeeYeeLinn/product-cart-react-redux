import React from 'react'
import { useSelector } from 'react-redux';
import FavCard  from './FavCard';
import {useNavigate} from 'react-router-dom';

const Fav = () => {
  const fav = useSelector(state => state.product.fav);
  const navigate = useNavigate()
  return (
    <div>
      {fav?.length > 0 ? (
        <div className='d-flex gap-2 flex-wrap'>
          {fav?.map(i => <FavCard key={i?.id} i={i} /> )}
        </div>
      ) : (
        <div className='border border-1 p-5 rounded-lg shadow-md text-center w-50 mx-auto'>
          <h2 className='mb-4'>There is no favourite item!</h2>
          <button className="btn btn-info" onClick={() => navigate('/')}>Go Shopping</button>
        </div>
      ) }
    </div>
  )
}

export default Fav