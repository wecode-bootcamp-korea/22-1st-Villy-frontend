import React, { Component } from 'react';

import './ProductDec.scss';

export class ProductDec extends Component {
  render() {
    const { description } = this.props;
    return (
      <div>
        <li className="productDec">{description}</li>
      </div>
    );
  }
}

export default ProductDec;
