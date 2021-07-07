import React, { Component } from 'react';

import './ProductIcon.scss';

export class ProductIcon extends Component {
  render() {
    return (
      <li className="ProductIcon">
        <img src={this.props.src} alt={this.props.alt} />
      </li>
    );
  }
}

export default ProductIcon;
