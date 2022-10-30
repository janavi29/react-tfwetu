import React from 'react';
import './style.css';

export default class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>Hi, I am {this.props.model} a Car!</h2>;
  }
}
