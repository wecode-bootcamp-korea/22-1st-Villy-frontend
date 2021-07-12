import React, { Component } from 'react';

import './ProductModal.scss';

export class ProductModal extends Component {
  render() {
    return (
      <li className="modalBox">
        <i className="fas fa-check" />
        <span>{this.props.productName}을(를) 장바구니에 담았습니다.</span>
      </li>
    );
  }
}

export default ProductModal;
