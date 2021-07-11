import React, { Component } from 'react';

import { GET_PRODUCTS_API } from '../../../src/config.js';

import ProductCard from './ProductCard/ProductCard';

import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productCard: [],
      addCart: false,
      isModalOn: false,
      checked: false,
      bone: false,
      hair: false,
      growth: false,
      skin: false,
    };
  }

  componentDidMount() {
    fetch(`${GET_PRODUCTS_API}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productCard: data.message,
        });
      });
  }

  handleCheckBox = event => {
    console.log(this.state.bone, `this.state.bone`);
    console.log(this.state.hair, `this.state.hair`);
    console.log(this.state.growth, `this.state.growth`);
    console.log(this.state.skin, `this.state.skin`);

    fetch(`${GET_PRODUCTS_API}?efficacy=${event.target.value}`)
      .then(res => res.json())
      .then(data => {
        if (event.target.value) {
          this.setState({
            productCard: data.message,
          });
        } else {
          this.setState({
            productCard: data.message,
          });
        }
      });
    // this.setState({
    //   checked: !this.state.checked,
    // });
  };

  render() {
    console.log(this.state.productCard);
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

          <form className="productCategory">
            <input
              type="checkbox"
              name="bone"
              value="1"
              checked={this.state.checked.value}
              onChange={this.handleCheckBox}
            />
            뼈
            <input
              type="checkbox"
              name="hair"
              value="2"
              checked={this.state.checked.value}
              onChange={this.handleCheckBox}
            />
            모발
            <input
              type="checkbox"
              name="growth"
              value="3"
              checked={this.state.checked.value}
              onChange={this.handleCheckBox}
            />
            성장
            <input
              type="checkbox"
              name="skin"
              value="4"
              checked={this.state.checked.value}
              onChange={this.handleCheckBox}
            />
            피부
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
