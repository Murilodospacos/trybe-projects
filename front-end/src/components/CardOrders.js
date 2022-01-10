import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CardOrders() {
  const [orders, setOrders] = React.useState([]);
  const { id } = JSON.parse(localStorage.getItem('user'));

  async function loadOrders() {
    try {
      const result = await axios.get(`http://localhost:3001/sales/${id}`);
      setOrders(result.data);
    } catch (erro) {
      console.log(erro.message);
    }
  }

  React.useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div>
      { orders.map((item, index) => (
        <Link
          to={ `/customer/orders/${item.id}` }
          key={ `${index}` }
        >
          <div>
            <div
              data-testid={ `customer_orders__element-order-id-${item.id}` }
            >
              { item.id }
            </div>
            <div
              data-testid={ `customer_orders__element-delivery-status-${item.id}` }
            >
              { item.status }
            </div>
            <div
              data-testid={ `customer_orders__element-order-date-${item.id}` }
            >
              { item.saleDate }
            </div>
            <div>
              { item.totalPrice }
            </div>
          </div>
        </Link>
      )) }
    </div>
  );
}
