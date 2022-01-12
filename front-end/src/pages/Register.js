import axios from 'axios';
import { Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [isToken, setToken] = useState(false);
  const [isRole, setRole] = useState(null);

  useEffect(() => {
    function loginValidation() {
      const NAME_LENGTH = 12;
      const nameCheck = name.length > NAME_LENGTH;
      const mailCheck = email.split('').includes('@') && email.split('.').includes('com');
      const MAX_LENGTH = 5;
      const passwordLength = password.length > MAX_LENGTH;
      if (nameCheck && passwordLength && mailCheck && disabled) {
        setDisabled(false);
      } else if ((!nameCheck || !passwordLength || !mailCheck) && !disabled) {
        setDisabled(true);
      }
    }
    loginValidation();
  }, [name, email, password, disabled]);

  async function registerFunction() {
    try {
      const response = await axios.post('http://localhost:3001/register', { name, email, password });

      localStorage.setItem('user', JSON.stringify({
        name: response.data.userExists.name,
        email: response.data.userExists.email,
        role: response.data.userExists.role,
        token: response.data.token,
      }));
      setRole(response.data.userExists.role);
      setToken(true);
      console.log('response', response);
      return response;
    } catch (erro) {
      console.log(erro.message);
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
      <form>
        <h1>Cadastro</h1>
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            placeholder="Seu nome"
            data-testid="common_register__input-name"
            value={ name }
            onChange={ (event) => setName(event.target.value) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            placeholder="seu-email@site.com.br"
            data-testid="common_register__input-email"
            value={ email }
            onChange={ (event) => setEmail(event.target.value) }
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            type="password"
            placeholder="********"
            data-testid="common_register__input-password"
            value={ password }
            onChange={ (event) => setPassword(event.target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="common_register__button-register"
          disabled={ disabled }
          onClick={ registerFunction }
        >
          CADASTRAR
        </button>
      </form>
      { error && (
        <div data-testid="common_register__element-invalid_register">
          { error }
        </div>
      ) }
      { isToken && <Redirect to={ handlePath[isRole] } /> }
    </div>
  );
}
export default Register;