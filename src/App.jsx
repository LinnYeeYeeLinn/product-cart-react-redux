import React from 'react';
import Cart from './components/Cart';
import Fav from './components/Fav';
import Navbar from './components/Navbar';
import Products from './components/Products';
import './index.css';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/fav' element={<Fav />} />
      </Routes>
    </div>
  )
}

export default App
