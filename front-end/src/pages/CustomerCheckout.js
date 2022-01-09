import React, { useState } from 'react';
import axios from 'axios';
import DeliveryDetailsAddress from '../components/customer-check/DeliveryDetailsAddress';
import FinalizeOrder from '../components/customer-check/FinalizeOrder';
import Navbar from '../components/Navbar';

function CustomerCheckout() {
  const [products, setProducts] = useState([]);

  function getProducts() {
    axios.get('http://localhost:3001/products')
      .then((response) => {
        setProducts(response.data);
      });
  }

  return (
    <div>
      <Navbar />
      <FinalizeOrder products={ products } />
      <DeliveryDetailsAddress />
      <button type="button" onClick={ getProducts }>GET PRODUCTS</button>
    </div>
  );
}

export default CustomerCheckout;
