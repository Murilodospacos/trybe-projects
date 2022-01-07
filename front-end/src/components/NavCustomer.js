import React from 'react';

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
        <button
          type="button"
          data-testeid="customer_products__element-navbar-link-orders"
        >
          Meus Pedidos
        </button>
      </div>
    </div>
  );
}

export default NavCustomer;
