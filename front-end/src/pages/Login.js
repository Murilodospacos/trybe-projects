import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import rockGlass from '../images/rockGlass.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [isToken, setToken] = useState(false);
  const [error, setError] = useState(false);
  const [isRole, setRole] = useState(null);
  const history = useHistory();
  const testId = 'common_login__element-invalid-email';

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setToken(true);
    }
  }, [isToken]);

  useEffect(() => {
    function loginValidation() {
      const mailCheck = email.split('').includes('@') && email.split('.').includes('com');
      const MAX_LENGTH = 5;
      const passwordLength = password.length > MAX_LENGTH;
      if (passwordLength && mailCheck && disabled) {
        setDisabled(false);
      } else if ((!passwordLength || !mailCheck) && !disabled) {
        setDisabled(true);
      }
    }
    loginValidation();
  }, [email, password, disabled]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      localStorage.setItem('user', JSON.stringify({
        name: response.data.userExists.name,
        email: response.data.userExists.email,
        role: response.data.userExists.role,
        token: response.data.token,
      }));
      setRole(response.data.userExists.role);
      setToken(true);
    } catch (erro) {
      setError(erro.message);
    }
  }

  const handlePath = {
    customer: '/customer/products',
    seller: '/seller/orders',
    administrator: '/admin/manage',
  };

  return (
    <div>
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <h2>Login Page</h2>
      <div>
        <form>
          <label htmlFor="login">
            Login
            <br />
            <input
              data-testid="common_login__input-email"
              type="email"
              placeholder="digite o seu email"
              value={ email }
              onChange={ (event) => setEmail(event.target.value) }
            />
          </label>
          <br />
          <label htmlFor="senha">
            Senha
            <br />
            <input
              data-testid="common_login__input-password"
              type="password"
              placeholder="digite a sua senha"
              value={ password }
              onChange={ (event) => setPassword(event.target.value) }
            />
          </label>
        </form>
        <br />
        <button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ disabled }
          onClick={ handleSubmit }
        >
          LOGIN
        </button>
        <br />
        <br />
        <Link to="/register">
          <button
            data-testid="common_login__button-register"
            type="button"
          >
            Ainda não tenho conta
          </button>
        </Link>
      </div>
      { error ? <div data-testid={ testId }>{ error }</div> : '' }
      { isToken ? history.push(handlePath[isRole]) : <p>Trybe 2021</p> }
    </div>
  );
}

export default Login;
