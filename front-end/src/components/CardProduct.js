import React from 'react';
import PropTypes from 'prop-types';
import { ProductContext } from '../provider/ProductContext';

const magicNumber = -1;

function CardProduct({ id, name, price, urlImage, key }) {
  const { cart, setCart } = React.useContext(ProductContext);
  const [count, setCount] = React.useState(magicNumber);

  React.useEffect(() => {
    const productExist = cart.findIndex((value) => value.id === id);
    if (count <= 0) {
      setCart([...cart.filter((_, index) => productExist !== index)]);
      return;
    }
    if (productExist >= 0) {
      setCart([...cart.map((element, index) => {
        if (productExist === index) {
          element.quantity = count;
        }
        return element;
      })]);
      return;
    }
    setCart([...cart, { id, name, price, quantity: count }]);
  }, [count]);

  const handleIncrease = () => {
    if (count === magicNumber) {
      setCount(1);
    } else {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

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
          onClick={ handleDecrease }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ count === magicNumber ? 0 : count }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ handleIncrease }
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
