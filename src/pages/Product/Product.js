import React, { Component } from 'react';

import ProductCard from './ProductCard/ProductCard';

import './Product.scss';

export class Product extends Component {
  render() {
    return (
      <div className="Product">
        <header className="ProductHeader">
          <h1>
            건강한 삶을 위한
            <br />
            빌리의 연구와 도전은 계속됩니다.
          </h1>
        </header>
        <section className="ProductBody">
          <h2 className="sr-only">Product Body</h2>
          <ul className="ProductList">
            <ProductCard />
          </ul>
        </section>
      </div>
    );
  }
}

export default Product;
