import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Customer from "./Customer/Customer.js"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerList: [
        {
          id: "1",
          name: "Test Name １"
        },
        {
          id: "2",
          name: "Test Name 2"
        }
      ]
    };

  }

  handleChangeCustomerList(customers) {
    this.setState({ customers: customers })
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Customer</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/">
              <CustomerFunction
                customerList={this.state.customerList} />
            </Route>
            <Route path="/shop">
              <ShopFunction
              />
            </Route>
            <Route path="/order">
              <OrderFunction
                customerList={this.state.customerList}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function CustomerFunction(obj) {
  return (
    <div>
      <h2>Customer</h2>
      <Customer
        listCustomer={obj.customerList} />
    </div>
  );
}

function ShopFunction(obj) {
  return (
    <div>
      <h2>Shop</h2>
    </div>
  );
}

function OrderFunction(obj) {
  return (
    <div>
      <h2>Order</h2>
    </div>
  );
}

export default App;