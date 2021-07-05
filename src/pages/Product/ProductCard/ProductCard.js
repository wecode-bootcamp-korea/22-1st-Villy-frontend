import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './ProductCard.scss';

export class ProductCard extends Component {
  render() {
    return (
      <div className="ProductCard">
        <header>
          <h2>
            제품설명
            <br />
            <strong>제품이름</strong>
          </h2>
          {/* 아이콘 3개 받아오기 */}
          {/* 이미지 */}
        </header>
        <section>
          {/* info */}
          {/* quantity */}
          {/* price */}
          {/* add */}
          {/* button */}
        </section>
      </div>
    );
  }
}

export default ProductCard;
