import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SaleCard from './SaleCard';

function SalesList() {
  const [sales, setSales] = useState([]);
  const testId = 'seller_orders__element-order-date';

  const retrieveSales = async () => {
    axios.get('http://localhost:3001/sales')
      .then((res) => {
        const result = res.data;
        setSales(result);
      });
  };

  useEffect(() => {
    retrieveSales();
  }, []);

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
