import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SaleCard({ sale }) {
  const { id, totalPrice, deliveryAddress, deliveryNumber, saleDate, status } = sale;

  const NINE = 9;
  const fullDate = new Date(saleDate);
  const addZero = (n) => (n <= NINE ? `0${n}` : n);
  const day = addZero(fullDate.getDate());
  const month = addZero(fullDate.getMonth() + 1);
  const formatDate = `${day}/${month}/${fullDate.getFullYear()}`;
  console.log(formatDate);

  const testId = {
    48: 'seller_orders__element-order-id-',
    49: 'seller_orders__element-delivery-status-',
    50: 'seller_orders__element-order-date-',
    51: 'seller_orders__element-card-price-',
    52: 'seller_orders__element-card-address-',
  };

  return (
    <Link to={ `/localhost:3000/seller/orders/${id}` }>
      <div className="grid-container">
        <div className="grid-item" data-testid={ `${testId[48]}${id}` }>
          <p>{`Pedido 00${id}`}</p>
        </div>
        <div className="grid-item" data-testid={ `${testId[49]}${id}` }>
          <p>{status}</p>
        </div>
        <div className="grid-item" data-testid={ `${testId[50]}${id}` }>
          <p>{formatDate}</p>
        </div>
        <div className="grid-item" data-testid={ `${testId[51]}${id}` }>
          <p>{totalPrice}</p>
        </div>
        <div className="grid-item" data-testid={ `${testId[52]}${id}` }>
          <p>{`${deliveryAddress}, ${deliveryNumber}`}</p>
        </div>
      </div>
    </Link>
  );
}

SaleCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default SaleCard;
