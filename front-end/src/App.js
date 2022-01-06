import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Redirect to="/login" /></Route>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
