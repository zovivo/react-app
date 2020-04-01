import React, { Component } from 'react';
import './CustomerForm.css';

class CustomerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      name: "",
    }
    this.handleChangeId = this.handleChangeId.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeId(event) {
    this.setState({ id: event.target.value })
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value })
  }
  handleSubmit(event) {
    if(this.state.id.trim() =='' ){
      alert("ID is invalid !");
      return;
    }
    if(this.state.name.trim() =='' ){
      alert("Name is invalid !");
      return;
    }
    this.props.onSubmit(this.state)
    this.setState({
      id: "",
      name: "",
    })
  }

  render() {
    return (
      <div className="CustomerForm">
        <div>
          <input
            type="text"
            className="id"
            placeholder="id"
            value={this.state.id}
            onChange={this.handleChangeId}
          />
        </div>
        <div>
          <input
            type="textarea"
            className="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
        </div>
        <div>
          <button
            className="button"
            onClick={this.handleSubmit}
          >
            ADD
          </button>
        </div>
      </div>
    )
  }
}

export default CustomerForm;