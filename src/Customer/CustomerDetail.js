import React, { Component } from 'react';
import './CustomerDetail.css';

class CustomerDetail extends Component {
  render() {
    const {
      id,
      name
    } = this.props;
    return (
      <div className="CustomerDetail" onClick={this.props.onClick}>
        <div className="CustomerDetail-id">{this.props.id}</div>
        <div className="CustomerDetail-name">{this.props.name}</div>
        <span className="hoverText">click to delete</span>
      </div>
    );
  }
}

export default CustomerDetail;