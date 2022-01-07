import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';

function Navbar() {
  const [isLocal, setLocal] = React.useState(false);
  const [isRole, setRole] = React.useState('');
  const [isName, setName] = React.useState('');
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    const path = '/';
    history.push(path);
  };

  React.useEffect(() => {
    if (!localStorage.getItem('user')) {
      setLocal(true);
    } else {
      const { role, name } = JSON.parse(localStorage.getItem('user'));
      setName(name);
      setRole(role);
    }
  }, []);

  const navbarFunction = (param) => {
    if (param === 'customer') {
      return (
        <navbar>
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
          <div>
            <h2
              data-testid="customer_products__element-navbar-user-full-name"
            >
              { isName }
            </h2>
          </div>
          <div>
            <button
              type="button"
              data-testid="customer_products__element-navbar-link-logout"
              onClick={ logout }
            >
              Sair
            </button>
          </div>
        </navbar>);
    }
    if (param === 'seller') {
      return (
        <navbar>
          <div>
            <button
              type="button"
              data-testeid="customer_products__element-navbar-link-orders"
            >
              Meus Pedidos
            </button>
          </div>
          <div>
            <h2
              type="button"
              data-testid="customer_products__element-navbar-user-full-name"
            >
              { isName }
            </h2>
          </div>
          <div>
            <button
              type="button"
              data-testid="customer_products__element-navbar-link-logout"
              onClick={ logout }
            >
              Sair
            </button>
          </div>
        </navbar>);
    }
    if (param === 'administrator') {
      return (
        <navbar>
          <div>
            <button
              type="button"
            >
              Gerenciar Usuários
            </button>
          </div>
          <div>
            <h2
              data-testid="customer_products__element-navbar-user-full-name"
            >
              { isName }
            </h2>
          </div>
          <div>
            <button
              type="button"
              data-testid="customer_products__element-navbar-link-logout"
              onClick={ logout }
            >
              Sair
            </button>
          </div>
        </navbar>);
    }
  };

  return (
    <div>
      { isLocal && <Redirect to="/" /> }
      { navbarFunction(isRole) }
    </div>
  );
}

export default Navbar;
