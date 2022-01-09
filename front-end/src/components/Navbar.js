import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import NavCustomer from './NavCustomer';
import NavSeller from './NavSeller';
import NavAdm from './NavAdm';

function Navbar() {
  const [isLocal, setLocal] = React.useState(false);
  const [isName, setName] = React.useState('');
  const [isRole, setRole] = React.useState('');
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

  if (isLocal) {
    return <Redirect to="/" />;
  }
  const obj = {
    customer: <NavCustomer />,
    administrator: <NavAdm />,
    seller: <NavSeller />,
  };
  return (
    <nav>
      { obj[isRole] }
      <div>
        <h2 data-testid="customer_products__element-navbar-user-full-name">
          {isName}
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
    </nav>
  );
}

export default Navbar;
