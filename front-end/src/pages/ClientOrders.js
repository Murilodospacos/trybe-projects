import React from 'react';
import CardOrders from '../components/CardOrders';
import NavCustomer from '../components/NavCustomer';

export default function ClientOrders() {
  return (
    <div>
      <NavCustomer />
      <CardOrders />
    </div>
  );
}
