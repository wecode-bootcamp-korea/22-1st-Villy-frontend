import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Nav
import Nav from './components/Nav/Nav';

//Login
import Login from './pages/Login/Login';

// Main
import Main from './pages/Main/Main';

// Product
import Product from './pages/Product/Product';

// Signup
import Signup from './pages/Signup/Signup';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* Nav */}
        <Nav />
        <Switch>
          {/* Login */}
          <Route exact path="/login" component={Login} />

          {/* Main */}
          <Route exact path="/" component={Main} />

          {/* Product */}
          <Route exact path="/product" component={Product} />

          {/* Signup */}
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
