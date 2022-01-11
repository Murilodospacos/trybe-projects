import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function DeliveryDetailsAddress() {
  const [data, setData] = React.useState(null);

  function finalizeOrder() {
    axios.post('http://localhost:3001/sales', data)
      .then(res => setData(data))
      .catch(err => console.log(err.data));
  }

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
        <Link to="/customer/order/">
          <button
            type="button"
            data-testid="customer_checkout__button-submit-order"
            onClick={ finalizeOrder }
          >
            FINALIZAR PEDIDO
          </button>
        </Link>
      </form>
    </section>
  );
}
