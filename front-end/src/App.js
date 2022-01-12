import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminManageUsers from './pages/AdminManageUsers';
import Products from './pages/Products';
import ClientOrders from './pages/ClientOrders';
import CustomerCheckout from './pages/CustomerCheckout';
import DetailsCheckout from './pages/DetailsCheckout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Redirect push to="/login" /></Route>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/admin/manage" component={ AdminManageUsers } />
          <Route exact path="/customer/products" component={ Products } />
          <Route exact path="/customer/orders" component={ ClientOrders } />
          <Route exact path="/customer/checkout" component={ CustomerCheckout } />
          <Route exact path="/customer/order/:id" component={ DetailsCheckout } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
