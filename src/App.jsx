import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import Login from './Components/Login/Login';
import Signin from './Components/Signin/Signin';
import Shopmain from './Components/Shopmain/Shopmain';
import EmailRestApi from './Components/Home/EmailRestApi';
import Aquashop from './Components/cart/Appsc';
import Checkout from './Components/cart/Checkout';
import React, { useState, useEffect } from 'react';

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shopmain' element={<Shopmain />} />
            <Route path='/shop' element={<Aquashop />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route element={<EmailRestApi />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App