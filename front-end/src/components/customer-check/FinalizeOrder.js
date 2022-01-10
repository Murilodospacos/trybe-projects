import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../provider/ProductContext';

export default function FinalizeOrder() {
  const { cart, setCart } = useContext(ProductContext);

  function deleteProducts(id) {
    const newArray = cart.filter((item) => item.id !== id);
    setCart(newArray);
    return newArray;
  }

  function totalPrice() {
    const result = cart
      .reduce((total, curr) => total + parseFloat(curr.price * curr.quantity), 0)
      .toFixed(2);
    return result;
  }

  useEffect(() => {
    setCart(cart);
    console.log(cart, 'carttt');
  }, [cart]);

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
        { cart.map((item, index) => (
          <tbody key={ index }>
            <tr>
              <td
                data-testid={ `customer_checkout__element-order-table-${index}-` }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                { item.name }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                { item.quantity }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                { item.price }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                { (item.price * item.quantity).toFixed(2) }
              </td>
              <td
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
              >
                <button
                  type="button"
                  onClick={ () => deleteProducts(item.id) }
                >
                  Remover
                </button>
              </td>
            </tr>
          </tbody>
        )) }
      </table>
      <h1 data-testid="customer_checkout__element-order-total-price">
        { `Total: R$ ${totalPrice()}` }
      </h1>
    </section>
  );
}
