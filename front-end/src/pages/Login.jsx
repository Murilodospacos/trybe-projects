import React from 'react';

function Login() {
  return (
    <div>
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
            />
          </label>
        </form>
        <br />
        <button data-testid="common_login__button-login" type="submit">LOGIN</button>
        <br />
        <br />
        <button
          data-testid="common_login__button-register"
          type="button"
        >
          Ainda não tenho conta
        </button>
      </div>
      <div data-testid="common_login__element-invalid-email" />
    </div>
  );
}

export default Login;
