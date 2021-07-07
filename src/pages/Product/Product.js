import React, { Component } from 'react';
import ProductCard from './ProductCard/ProductCard';
import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productCard: [],
      cardBackground: CARDBACKGROUND,
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
    // const a =
    //   this.state.cardBackground &&
    //   this.state.cardBackground.map((el, idx) => {
    //     return console.log(idx, `idx`);
    //   });

    // console.log(a);

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

const CARDBACKGROUND = [
  '#E9F9FE',
  '#E0B5BA',
  '#EFE9D9',
  '#B1D9F1',
  '#EAE9E9',
  '#AEE19E',
  '#FFF0A6',
  '#CBC5E8',
  '#FAD4BF',
];
