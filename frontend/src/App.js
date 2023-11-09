import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/products/Products.jsx';
import Signup from './components/signup/Signup.jsx';
import Cart from './components/cart/Cart.jsx';
import { useState } from 'react';
import Header from './components/header/Header.jsx';

function App() {

  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <BrowserRouter>
      <Header cartItems={cartItems}/>
      <Routes>
        <Route exact path="/" element={<Products />}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/cart" element={<Cart cartItems={cartItems}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
