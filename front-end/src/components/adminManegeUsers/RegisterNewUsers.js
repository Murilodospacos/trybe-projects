import axios from 'axios';
import React, { useState, useEffect } from 'react';

function RegisterNewUsers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    function validateForm() {
      const NAME_LENGTH = 12;
      const nameCheck = name.length > NAME_LENGTH;
      const mailCheck = email.split('').includes('@') && email.split('.').includes('com');
      const MAX_LENGTH = 5;
      const passwordLength = password.length > MAX_LENGTH;
      const { role } = JSON.parse(localStorage.getItem('user'));

      if (nameCheck && passwordLength && mailCheck
          && disabled && role === 'administrator') {
        setDisabled(false);
      } else if ((!nameCheck || !passwordLength || !mailCheck) && !disabled) {
        setDisabled(true);
      }
    }
    validateForm();
  }, [name, email, password, disabled]);

  async function registerFunction() {
    try {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const options = { headers: { Authorization: token } };

      const response = await axios.post('http://localhost:3001/admin/manage', { name, email, password, role: userRole }, { options });
      if (response) setUserRedirect(true);
      return response;
    } catch (erro) {
      setError(erro.message);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await registerFunction();
  }

  return (
    <div>
      <h2>Cadastrar novo usuário</h2>
      <form>
        <label htmlFor="name">
          <input
            data-testid="admin_manage__input-name"
            type="text"
            placeholder="Nome e sobrenome"
            value={ name }
            onChange={ (event) => setName(event.target.value) }
          />
        </label>

        <label htmlFor="email">
          <input
            data-testid="admin_manage__input-email"
            type="text"
            placeholder="seu-email@site.com.br"
            value={ email }
            onChange={ (event) => setEmail(event.target.value) }
          />
        </label>

        <label htmlFor="password">
          <input
            data-testid="admin_manage__input-password"
            type="text"
            placeholder="**********"
            value={ password }
            onChange={ (event) => setPassword(event.target.value) }
          />
        </label>

        <label htmlFor="tipo">
          <select
            data-testid="admin_manage__select-role"
            name="tipo"
            onChange={ (event) => setUserRole(event.target.value) }
          >
            <option>Cliente</option>
            <option>Vendedor</option>
            <option>Administrador</option>
          </select>
        </label>

        <button
          data-testid="admin_manage__button-register"
          type="submit"
          disabled={ disabled }
          onClick={ handleSubmit }
        >
          CADASTRAR
        </button>
      </form>
      { error && (
        <h2>
          { error }
        </h2>
      ) }
    </div>
  );
}

export default RegisterNewUsers;
