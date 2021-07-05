import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { RiEyeCloseLine } from 'react-icons/ri';

import './ProductCard.scss';

export class ProductCard extends Component {
  render() {
    return (
      <li
        className="ProductCard"
        style={{ backgroundColor: this.props.backgroundColor }}
      >
        <header>
          <h2>
            {this.props.efficacy}
            <br />
            <strong>{this.props.name}</strong>
          </h2>
          <RiEyeCloseLine />
          {/* iconUrl : 세개일 경우 ? */}
          {this.props.pillImage}
        </header>
        <section>
          {this.props.description}
          {this.props.quantity}
          {this.props.price}
          {this.props.addedDec}
          <button>아이콘 + 장바구니 담기</button>
        </section>
      </li>
    );
  }
}

export default ProductCard;
