import React, { Component } from 'react';
import ProductCard from './ProductCard/ProductCard';
import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productCard: [],
    };
  }

  componentDidMount() {
    fetch('/data/ProductData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productCard: data,
        });
      });
  }

  render() {
    return (
      <div className="Product">
        <header className="productHeader">
          <h1>
            건강한 삶을 위한
            <br />
            빌리의 연구와 도전은 계속됩니다.
          </h1>
        </header>
        <section className="productBody">
          <h2 className="sr-only">Product Body</h2>
          {/* 맵함수의 고유한 값으로 symbol 가능? */}
          <ul className="productList">
            {this.state.productCard.map(product => (
              <ProductCard key={product.id} productCard={product} />
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default Product;
