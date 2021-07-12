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
      bone: false,
      hair: false,
      growth: false,
      skin: false,
    };
  }

  componentDidMount() {
    // fetch('./data/ProductData.json')
    fetch(`${GET_PRODUCTS_API}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productCard: data.message,
        });
      });
  }

  makeCondition = () => {
    let fillter = [];

    if (this.state.bone) {
      fillter.push(`efficacy=1`);
    }

    if (this.state.hair) {
      fillter.push(`efficacy=2`);
    }

    if (this.state.growth) {
      fillter.push(`efficacy=3`);
    }

    if (this.state.skin) {
      fillter.push(`efficacy=4`);
    }

    console.log(fillter.join('&'));

    // fetch(`./data/ProductData.json?${fillter.join('&')}`)
    fetch(`${GET_PRODUCTS_API}?${fillter.join('&')}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productCard: data.message,
        });
      });
  };

  handleCheckBox = event => {
    this.setState(
      {
        [event.target.name]: !this.state[event.target.name],
      },
      () => {
        this.makeCondition();
      }
    );
    console.log(this.state);
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
            <div className="ProductCheckBox">
              <input
                id="bone"
                type="checkbox"
                name="bone"
                onChange={this.handleCheckBox}
              />
              <label for="bone">
                <img className="iconImage" alt="hair" src="images/bone.svg" />
                <span className="categoryText">뼈</span>
              </label>
            </div>
            <div className="ProductCheckBox">
              <input
                id="hair"
                type="checkbox"
                name="hair"
                onChange={this.handleCheckBox}
              />
              <label for="hair">
                <img
                  className="iconImage"
                  alt="hair"
                  src="images/hairstyle.svg"
                />
                <span className="categoryText">모발</span>
              </label>
            </div>
            <div className="ProductCheckBox">
              <input
                id="growth"
                type="checkbox"
                name="growth"
                onChange={this.handleCheckBox}
              />
              <label for="growth">
                <img className="iconImage" alt="hair" src="images/height.svg" />
                <span className="categoryText">성장</span>
              </label>
            </div>
            <div className="ProductCheckBox">
              <input
                id="skin"
                type="checkbox"
                name="skin"
                onChange={this.handleCheckBox}
              />
              <label for="skin">
                <img
                  className="iconImage"
                  alt="hair"
                  src="images/therapy.svg"
                />
                <span className="categoryText">피부</span>
              </label>
            </div>
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
