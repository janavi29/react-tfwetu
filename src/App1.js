import React from 'react';
import './style.css';

export default class Car extends React.Component {
  render() {
    return <h2>Hi, I am {this.state.color} a Car!</h2>;
  }
}
