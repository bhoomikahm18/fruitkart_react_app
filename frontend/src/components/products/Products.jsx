import React, { useEffect, useState } from 'react'

function Products(props) {
  const [products, setProducts] = useState({ flag: false, productsList: null });

  async function getData() {
    let backend_url = 'http://localhost:3300/products';
    let response = await fetch(backend_url);
    let responseData = await response.json();
    setProducts({ flag: true, productsList: responseData['productItems'] });

  }

  useEffect(() => { getData() }, []);

  return ((products.flag) ?
    <div className='products-container'>
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
                onClick={()=>props.handleAddProduct(item)}>Add to Cart</button>
              </div>
            </div>
          )
        })}
      </div>
    </div> : <div><h1>Loading..!!</h1></div>
  );
}

export default Products