import React, { Component } from 'react';

import './ProductDec.scss';

export class ProductDec extends Component {
  render() {
    const { description } = this.props;
    return <li className="productDec">{description}</li>;
  }
}

export default ProductDec;
