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
      // checked: false,
      bone: false,
      hair: false,
      growth: false,
      skin: false,
    };
  }

  componentDidMount() {
    // fetch(`${GET_PRODUCTS_API}`)
    fetch('./data/ProductData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productCard: data.message,
        });
      });
  }

  makeCondition = () => {
    let test = [];

    if (this.state.bone) {
      test.push(`efficacy=1`);
    }

    if (this.state.hair) {
      test.push(`efficacy=2`);
    }

    if (this.state.growth) {
      test.push(`efficacy=3`);
    }

    if (this.state.skin) {
      test.push(`efficacy=4`);
    }

    console.log(test.join('&'));
    console.log(`./data/ProductData.json?${test.join('&')}`);
    // fetch(`${GET_PRODUCTS_API}?`)
    fetch(`./data/ProductData.json?${test.join('&')}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productCard: data.message,
        });
      });
  };

  handleCheckBox = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    console.dir(event);
    console.log(event.target.checked);

    this.setState(
      {
        [event.target.name]: !this.state[event.target.name],
      },
      () => {
        this.makeCondition();
      }
    );
  };

  render() {
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
            <input type="checkbox" name="bone" onChange={this.handleCheckBox} />
            <label>뼈</label>
            <input type="checkbox" name="hair" onChange={this.handleCheckBox} />
            모발
            <input
              type="checkbox"
              name="growth"
              onChange={this.handleCheckBox}
            />
            성장
            <input type="checkbox" name="skin" onChange={this.handleCheckBox} />
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
