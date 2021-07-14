import React, { Component } from 'react';
import { GET_PRODUCTS_API } from '../../config';
import ProductCard from './ProductCard/ProductCard';
import ProductCategory from './ProductCategory/ProductCategory';

import './Product.scss';

import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    // this.myRef = React.createRef();
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
    fetch('./data/productData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productCard: data.message,
        });
      });
  }

  // changeRef = () => {
  //   this.myRef.current = {
  //     ...this.myRef.current,
  //     bone: false,
  //     hair: false,
  //     growth: false,
  //     skin: false,
  //   };
  // };

  makeCondition = () => {
    const filterMatch = {
      bone: 1,
      hair: 2,
      growth: 3,
      skin: 4,
    };

    const filtered = Object.entries(this.state.filterState).reduce(
      (acc, [key, value]) => {
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

    // ref 적용중
    // const filtered = Object.entries(this.myRef.current).reduce(
    //   (acc, [key, value]) => {
    //     if (!acc && value) {
    //       return acc + `efficacy=${filterMatch[key]}`;
    //     }

    //     if (value) {
    //       return acc + `&efficacy=${filterMatch[key]}`;
    //     }
    //     return acc;
    //   },
    //   ''
    // );

    fetch(`${GET_PRODUCTS_API}?${filtered}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productCard: data.message,
        });
      });
  };

  handleCheckBox = event => {
    const checkBoxName = event.target.name;
    const checkBoxNameState = !this.state.filterState[checkBoxName];
    this.setState(
      {
        filterState: {
          ...this.state.filterState,
          [checkBoxName]: checkBoxNameState,
        },
      },
      () => {
        this.makeCondition();
      }
    );
  };

  // handleCheckBox = event => {
  //   console.log(event.target.name);
  //   console.log(this.myRef.current);
  // };

  render() {
    // ref 적용
    // console.log(this.changeRef);
    // console.log(this.myRef.current);

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
            <ProductCategory
              key={productCard.id}
              makeCondition={this.makeCondition}
              handleCheckBox={this.handleCheckBox}
            />
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
