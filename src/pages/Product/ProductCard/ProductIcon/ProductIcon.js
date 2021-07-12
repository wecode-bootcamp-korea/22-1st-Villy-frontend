import React, { Component } from 'react';

import './ProductIcon.scss';

export class ProductIcon extends Component {
  render() {
    return (
      <li className="ProductIcon">
        <img alt="추후데이터받기" src={this.props.icon_image_url} />
      </li>
    );
  }
}

export default ProductIcon;
