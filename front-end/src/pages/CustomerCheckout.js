import React from 'react';
import DeliveryDetailsAddress from '../components/customer-check/DeliveryDetailsAddress';
import FinalizeOrder from '../components/customer-check/FinalizeOrder';
import Navbar from '../components/Navbar';

function CustomerCheckout() {
  return (
    <div>
      <Navbar />
      <FinalizeOrder />
      <DeliveryDetailsAddress />
    </div>
  );
}

export default CustomerCheckout;
