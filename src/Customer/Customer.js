import React, { Component } from 'react';
import CustomerDetail from "./CustomerDetail.js";
import CustomerForm from "./CustomerForm.js";
import './Customer.css';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
    this.handleAddToDo = this.handleAddToDo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  isExistedId(id) {
    let isExisted = 0;
    this.state.customers.map((ele, index) => {
      if (ele.id === id)
        isExisted = 1;
    });
    return isExisted;
  }

  handleAddToDo(input) {
    if (this.isExistedId(input.id) != 1) {
      this.state.customers.push(input)
      this.setState({ customers: this.state.customers })
    } else {
      alert("ID is existed !");
    }
  }

  handleDelete(index) {
    this.state.customers.splice(index, 1)
    this.setState({ customers: this.state.customers })
  }

  render() {
    const {
      listCustomer
    } = this.props;
    this.state.customers = listCustomer;
    return (
      <div className="Customer">
        <CustomerForm onSubmit={this.handleAddToDo} />
        <div>
          {
            this.state.customers.map((ele, index) => (
              <CustomerDetail
                key={index}
                id={ele.id}
                name={ele.name}
                onClick={() => this.handleDelete(index)}
              />
            ))
          }
        </div>
      </div>
    );
  }
}
export default Customer;