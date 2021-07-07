import React, { Component } from 'react';

import './ProductDescription.scss';

export class ProductDescription extends Component {
  render() {
    console.log(this.props.description);
    const { description } = this.props;
    return <li className="productDescription">{description}</li>;
  }
}

export default ProductDescription;
