import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Products from './pages/products/products-page';
import Create from './pages/create/create-page';
import Product from './pages/product/product-page';
import Edit from './pages/edit/edit-page';

function App() {
  return (
    <>
      <Routes>
        <Route path='/*'>
          <Route index element={<Products />} />
          <Route path='create' element={<Create />} />
          <Route path=':product' element={<Product />} />
          <Route path='edit/:product' element={<Edit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
