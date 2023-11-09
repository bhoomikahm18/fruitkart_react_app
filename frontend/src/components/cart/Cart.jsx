import React from 'react';
import './Cart.css';

function Cart({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearence }) {
  const totalPrice = cartItems.reduce((price, item) => {
    return price + (item.quantity * item.price)
  }, 0);

  return (
    <div className='cart-items'>
      <h2 className='cart-items-header'>Cart Items</h2>
      <div className='clear-cart'>
        {cartItems.length >= 1 && (
          <button className='clear-cart-button' onClick={handleCartClearence}>Clear Cart</button>
        )}
      </div>
      {cartItems.length === 0 &&
        <div className='cart-items-empty'>
          No items are added in the cart
        </div>}
      <div>
        {cartItems.map(item => {
          return (<div key={item.id} className="cart-items-list">
            <img className="cart-item-image"
              src={item.image}
              alt={item.name} />
            <div className='cart-items-name'>
              {item.name}
            </div>
            <div className='cart-items-function'>
              <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
              <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
            </div>
            <div className='cart-items-price'>
              {item.quantity} x Rs.{item.price}
            </div>
          </div>
          );
        })
        }
      </div>
      <div className='cart-items-total-price-name'>
        Total Price
        <div className='cart-items-total-price'> Rs.{totalPrice}</div>
      </div>
    </div>
  );
}


export default Cart