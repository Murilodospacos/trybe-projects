import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <BrowserRouter>
        <Switch>
          <Route>
            <Redirect exact from="/" to="/login" component={Login} />
          </Route>
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
