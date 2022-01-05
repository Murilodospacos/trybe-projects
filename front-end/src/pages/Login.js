import React, { useState, useEffect } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

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
  }, [email, password]);

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
        >
          LOGIN
        </button>
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
