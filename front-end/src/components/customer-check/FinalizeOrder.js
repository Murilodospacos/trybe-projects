import React from 'react';
import PropTypes from 'prop-types';

export default function FinalizeOrder({ products }) {
  // const { products } = this.props;
  return (
    <section>
      <h2>Finalizar Pedido</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        { products.map((item, index) => (
          <tbody key={ index }>
            <tr>
              <td data-testid={ `customer_checkout__element-order-table-${index}-` }>
                {index + 1}
              </td>
              <td data-testid="customer_checkout__element-order-table-name-">
                { item.name }
              </td>
              <td data-testid="customer_checkout__element-order-table-quantity-">
                { item.quantity }
              </td>
              <td data-testid="customer_checkout__element-order-table-unit-price-">
                { item.price }
              </td>
              <td data-testid="customer_checkout__element-order-table-sub-total-">
                R$10,50
              </td>
              <td data-testid="customer_checkout__element-order-table-remove-">
                Remover
              </td>
            </tr>
          </tbody>
        )) }
      </table>
      <h1 data-testid="customer_checkout__element-order-total-price">
        Total: R$  28,46
      </h1>
    </section>
  );
}

FinalizeOrder.propTypes = {
  products: PropTypes.arrayOf(PropTypes.name).isRequired,
};
