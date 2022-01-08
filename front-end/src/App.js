import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import SellerSales from './pages/SellerSales';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Redirect to="/login" /></Route>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/customer/products" component={ Products } />
          <Route exact path="/seller/orders" component={ SellerSales } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
