import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SaleCard from './SaleCard';
// useEffect useState
function SalesList() {
  const [sales, setSales] = useState([]);
  const retrieveSales = async () => {
    try {
      await axios.get('http://localhost:3001/sales')
        .then((res) => {
          setSales(res.data);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    retrieveSales();
  }, []);

  const testId = 'seller_orders__element-order-id-';

  return (
    <div data-testid="sale-list" className="sale-list">
      { sales.map((sale) => (<SaleCard
        data-testid={ `${testId}${sale.id}` }
        key={ sale.id }
        sale={ sale }
      />)) }
    </div>
  );
}

export default SalesList;
