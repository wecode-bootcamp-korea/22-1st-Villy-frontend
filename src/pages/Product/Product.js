import React, { Component } from 'react';

// import { GET_PRODUCTS_API } from '../../../src/config.js';

import ProductCard from './ProductCard/ProductCard';

import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productCard: [],
      addCart: false,
      isModalOn: false,
      currentId: 0,
    };
  }

  componentDidMount() {
    fetch('./data/ProductData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productCard: data.message,
        });
      });
  }

  handleCheckBox = id => {
    fetch('./data/ProductData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentId: id,
        });
      });
  };

  render() {
    console.log(this.state.currentId);

    const { productCard } = this.state;

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
          {/* 이부분추가 */}
          <form className="productCategory">
            <input
              type="checkbox"
              name="efficacy"
              value="모발"
              onChange={() => this.handleCheckBox(1)}
            />
            모발
            <input
              type="checkbox"
              name="efficacy"
              value="뼈"
              onChange={() => this.handleCheckBox(2)}
            />
            뼈
            <input
              type="checkbox"
              name="efficacy"
              value="피부"
              onChange={() => this.handleCheckBox(3)}
            />
            피부
            <input
              type="checkbox"
              name="efficacy"
              value="성장"
              onChange={() => this.handleCheckBox(4)}
            />
            성장
          </form>

          <ul className="productList">
            {productCard.map((product, idx) => (
              <ProductCard
                key={idx}
                productCard={product}
                backgroundColor={
                  BACKGROUNDCOLOR_LIST[idx % BACKGROUNDCOLOR_LIST.length]
                }
                handleCartButton={this.handleCartButton}
              />
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

const BACKGROUNDCOLOR_LIST = [
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

export default Product;
