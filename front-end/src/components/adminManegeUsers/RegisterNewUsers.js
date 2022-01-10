import React from 'react';

function RegisterNewUsers() {
  return (
    <div>
      <h2>Cadastrar novo usuário</h2>
      <form>
        <label htmlFor="name">
          <input
            data-testid="admin_manage__input-name"
            type="name"
            placeholder="Nome e sobrenome"
          />
        </label>
        <label htmlFor="email">
          <input
            data-testid="admin_manage__input-email"
            type="email"
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label data-testid="admin_manage__input-password" htmlFor="password">
          <input type="password" placeholder="**********" />
        </label>
        <label htmlFor="tipo">
          <select data-testid="admin_manage__select-role" name="tipo">
            <option>Cliente</option>
            <option>Vendedor</option>
            <option>Administrador</option>
          </select>
        </label>
        <button
          data-testid="admin_manage__button-register"
          type="button"
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}

export default RegisterNewUsers;
