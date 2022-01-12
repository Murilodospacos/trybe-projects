import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

// const API_HOST = 'http://localhost:3001';
// const INVENTORY_API_URL = `${API_HOST}/admin/manage`;

export default function DeliveryDetailsAddress() {
  // const [address, setAddress] = useState('');
  // const [numberHouse, setNumberHouse] = useState('');
  // const [sellers, setSellers] = useState([]);

  // const fetchInventory = () => {
  //   fetch(`${INVENTORY_API_URL}`)
  //     .then((res) => res.json())
  //     .then((json) => setSellers(json));
  // };

  // useEffect(() => {
  //   fetchInventory();
  // }, []);

  // async function registerFunction() {
  //   try {
  //     const { token } = JSON.parse(localStorage.getItem('user'));
  //     const options = { headers: { Authorization: token } };

  //     const response = await axios.post('http://localhost:3001/admin/manage', { address, numberHouse }, options);

  //     // if (response) setUserRedirect(true);
  //     return response;
  //   } catch (error) {
  //     return console.log(error);
  //   }
  // }

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   await registerFunction();
  // }

  return (
    <section>
      <h2>Detalhes e Endereço para Entrega</h2>
      <form>
        <label htmlFor="people-sellers">
          P.Vendedora Responsável
          {/* <select
            name="people-sellers"
            data-testid="customer_checkout__select-seller"
          >
            {sellers.map((seller) => (
              <option key={ seller.id } value="seller">{ seller.name }</option>
            ))}
          </select> */}
        </label>
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            data-testid="customer_checkout__input-address"
            // onChange={ (event) => setAddress(event.target.value) }
            placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
          />
        </label>
        <label htmlFor="number-house">
          Número
          <input
            type="text"
            data-testid="customer_checkout__input-addressNumber"
            // onChange={ (event) => setNumberHouse(event.target.value) }
            placeholder="198"
          />
        </label>
        <Link to="/customer/order/">
          <button
            type="button"
            data-testid="customer_checkout__button-submit-order"
            // onClick={ handleSubmit }
            // disabled={ }
          >
            FINALIZAR PEDIDO
          </button>
        </Link>
      </form>
    </section>
  );
}
