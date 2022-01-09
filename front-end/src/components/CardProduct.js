import React from 'react';
import PropTypes from 'prop-types';

function CardProduct({ id, name, price, urlImage, key }) {
  console.log(urlImage);
  return (
    <div key={ key }>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { price.replace('.', ',') }
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
        style={ { width: '100px', height: '100px' } }
      />
      <div>
        <h3 data-testid={ `customer_products__element-card-title-${id}` }>{ name }</h3>
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          defaultValue={ 0 }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CardProduct;

CardProduct.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
};
