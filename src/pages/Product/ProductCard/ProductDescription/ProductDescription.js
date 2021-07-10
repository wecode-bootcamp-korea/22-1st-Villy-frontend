import React, { Component } from 'react';

import './ProductDescription.scss';

export class ProductDescription extends Component {
  render() {
    return <li className="productDescription">{this.props.summary}</li>;
  }
}

export default ProductDescription;
