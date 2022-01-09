import React, { useState } from 'react';
import axios from 'axios';
import DeliveryDetailsAddress from '../components/customer-check/DeliveryDetailsAddress';
import FinalizeOrder from '../components/customer-check/FinalizeOrder';

function CustomerCheckout() {
  const [products, setProducts] = useState([]);

  function getProducts() {
    axios.get('http://localhost:3001/products')
      .then((response) => {
        setProducts(response.data);
      });
  }

  return (
    <>
      <FinalizeOrder products={ products } />
      <DeliveryDetailsAddress />
      {/* { products.map((item, index) => <h2 key={ index }>{ item.name }</h2>) } */}
      <button type="button" onClick={ getProducts }>GET PRODUCTS</button>
    </>
  );
}

export default CustomerCheckout;
