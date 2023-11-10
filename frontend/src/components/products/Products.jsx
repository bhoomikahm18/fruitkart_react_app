import React, { useEffect, useState } from 'react'
import './Products.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Products(props) {
  const [products, setProducts] = useState({ flag: false, productsList: null });

  async function getData() {
    let backend_url = 'http://localhost:3300/products';
    let response = await fetch(backend_url);
    let responseData = await response.json();
    setProducts({ flag: true, productsList: responseData['productItems'] });

  }

  useEffect(() => { getData() }, []);

  function sortAlphebetAcending() {
    let productsCopy = [...products.productsList];
    let sorted = productsCopy.sort((a, b) => {
      return (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : 1;
    });
    setProducts({ flag: true, productsList: sorted });
  }

  function sortAlphebetDecending() {
    let productsCopy = [...products.productsList];
    let sorted = productsCopy.sort((a, b) => {
      return (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : -1;
    });
    setProducts({ flag: true, productsList: sorted });
  }

  function sortPriceAcending() {
    let productsCopy = [...products.productsList];
    let sorted = productsCopy.sort((a, b) => a.price - b.price);
    setProducts({ flag: true, productsList: sorted });
  }

  function sortPriceDecending() {
    let productsCopy = [...products.productsList];
    let sorted = productsCopy.sort((a, b) => b.price - a.price);
    setProducts({ flag: true, productsList: sorted });
  }

  return ((products.flag) ?
    <div className='products-container'>
      <div className="sort-button">
        <Dropdown>
          <Dropdown.Toggle variant="success" id='drowpdown-basic'>
            Sort By
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onClick={sortAlphebetAcending}>A -to- Z</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={sortAlphebetDecending}>Z -to- A</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3" onClick={sortPriceDecending}>High to Low</Dropdown.Item>
            <Dropdown.Item href="#/action-4" onClick={sortPriceAcending}>Low to High</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='products'>
        {products.productsList.map(item => {
          return (
            <div className='card' key={item.name}>
              <div>
                <img className='product-image' src={item.image} alt={item.image} />
              </div>
              <div>
                <h2 className='product-name'>{item.name}</h2>
              </div>
              <div className='product-price'>
                {item.price}/-
              </div>
              <div>
                <button className='product-add-button'
                  onClick={() => props.handleAddProduct(item)}>Add to Cart</button>
              </div>
            </div>
          )
        })}
      </div>
    </div> : <div><h1>Loading..!!</h1></div>
  );
}

export default Products