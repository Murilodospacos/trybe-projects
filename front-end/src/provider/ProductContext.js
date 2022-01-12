import React from 'react';
import PropTypes from 'prop-types';

export const ProductContext = React.createContext({});

export function ProductProvider({ children }) {
  const [cart, setCart] = React.useState([]);
  return (
    <ProductContext.Provider value={ { cart, setCart } }>
      { children }
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
