import React from 'react';

export default function DeliveryDetailsAddress() {
  return (
    <section>
      <h2>Detalhes e Endereço para Entrega</h2>
      <form>
        <label htmlFor="people-seller">
          P.Vendedora Responsável
          <select>
            <option value="laranja" data-testid="customer_checkout__select-seller">
              Fulana pereira
            </option>
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input type="text" data-testid="customer_checkout__input-address" />
        </label>
        <label htmlFor="number-house">
          Número
          <input type="text" data-testid="customer_checkout__input-addressNumber" />
        </label>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </section>
  );
}
