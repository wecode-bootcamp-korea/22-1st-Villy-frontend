import React, { Component } from 'react';

export class ProductDec extends Component {
  render() {
    return (
      <div>
        <li>{this.props.discriptionList}</li>
      </div>
    );
  }
}

export default ProductDec;
