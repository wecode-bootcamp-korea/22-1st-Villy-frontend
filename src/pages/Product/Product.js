import React, { Component } from 'react';
import { GET_PRODUCTS_API } from '../../config';
import ProductCard from './ProductCard/ProductCard';
import ProductCategory from './ProductCategory/ProductCategory';

import './Product.scss';

import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productCard: [],
      filterState: {
        bone: false,
        hair: false,
        growth: false,
        skin: false,
      },
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
    // const filterState = {
    //   bone: false,
    //   hair: true,
    //   growth: true,
    //   skin: false,
    // };

    const filterMatch = {
      bone: 1,
      hair: 2,
      growth: 3,
      skin: 4,
    };

    const filtered = Object.entries(this.state.filterState).reduce(
      (acc, [key, value]) => {
        //첫번째 조건도 필요함 & 없을때
        if (!acc && value) {
          return acc + `efficacy=${filterMatch[key]}`;
        }

        if (value) {
          return acc + `&efficacy=${filterMatch[key]}`;
        }
        return acc;
      },
      ''
    );

    // fetch(`./data/ProductData.json${filtered}`)
    fetch(`${GET_PRODUCTS_API}?${filtered}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productCard: data.message,
        });
      });

    console.log(filtered);
    // console.log(this.state.filterState);
  };

  handleCheckBox = event => {
    const checkBoxName = event.target.name;
    const tf = !this.state.filterState[checkBoxName];

    this.setState(
      {
        filterState: { ...this.state.filterState, [checkBoxName]: tf },
      },
      () => {
        this.makeCondition();
      }
    );
    console.log(`this.state.filterState`, this.state.filterState);
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
            <ProductCategory />

            {/* <div className="ProductCheckBox">
              <input
                type="checkbox"
                name="hair"
                onChange={this.handleCheckBox}
              />
              <label>
                <img
                  className="iconImage"
                  alt="hair"
                  src="/images/hairstyle.svg"
                />
                <span className="categoryText">모발</span>
              </label>
            </div>
            <div className="ProductCheckBox">
              <input
                type="checkbox"
                name="growth"
                onChange={this.handleCheckBox}
              />
              <label>
                <img
                  className="iconImage"
                  alt="growth"
                  src="/images/height.svg"
                />
                <span className="categoryText">성장</span>
              </label>
            </div>
            <div className="ProductCheckBox">
              <input
                type="checkbox"
                name="skin"
                onChange={this.handleCheckBox}
              />
              <label>
                <img
                  className="iconImage"
                  alt="skin"
                  src="/images/therapy.svg"
                />
                <span className="categoryText">피부</span>
              </label>
            </div> */}
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
