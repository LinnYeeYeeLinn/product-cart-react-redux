import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getData} from '../api'; 
import { addProducts } from '../services/productSlice';
import ProductCard from './ProductCard';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const getProducts = async () => {
        const data = await getData('/products');
        dispatch(addProducts(data));
    }
    useEffect(() => {
        getProducts();
    }, [])
  return (
    <div className='d-flex flex-wrap gap-2 justify-content-center mb-5'>
      {products?.map(product => <ProductCard key={product?.id} product={product} /> )}
    </div>
  )
}

export default Products
