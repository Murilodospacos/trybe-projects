import React from 'react';
import { Link } from 'react-router-dom';

function NavCustomer() {
  return (
    <div>
      <div>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-products"
        >
          Produtos
        </button>
      </div>
      <div>
        <Link to="/customer/orders">
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Meus Pedidos
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavCustomer;
