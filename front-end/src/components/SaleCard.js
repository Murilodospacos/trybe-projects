import React from 'react';
import PropTypes from 'prop-types';

function SaleCard({ sale }) {
  const { id, totalPrice, deliveryAddress, deliveryNumber, saleDate, status } = sale;
  const date = new Date(saleDate);
  const formatDate = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`;
  console.log(formatDate);
  const testId = {
    48: 'seller_orders__element-order-id-',
    49: 'seller_orders__element-delivery-status-',
    50: 'seller_orders__element-order-date-',
    51: 'seller_orders__element-card-price-',
    52: 'seller_orders__element-card-address-',
  };

  return (
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
