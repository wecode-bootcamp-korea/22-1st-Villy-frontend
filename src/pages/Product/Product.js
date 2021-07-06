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
            {this.state.productCard.map(product => {
              return (
                <ProductCard
                  key={product.id}
                  // productCard={product}
                  backgroundColor={product.backgroundColor}
                  efficacy={product.efficacy}
                  name={product.name}
                  icon={product.icon}
                  pillImage={product.pillImage}
                  description={product.description}
                  quantity={product.quantity}
                  price={product.price}
                  addedDec={product.addedDec}
                />
              );
            })}

            {/* 맵함수의 고유한 값으로 symbol 가능? */}
          </ul>
        </section>
      </div>
    );
  }
}

export default Product;
