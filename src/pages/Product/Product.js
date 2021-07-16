import React, { Component } from 'react';
import { GET_PRODUCTS_API } from '../../config';
import ProductCard from './ProductCard/ProductCard';
import ProductCategory from './ProductCategory/ProductCategory';

import { makeCondition } from '../../utils/productUtils';

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

  changeProductCard = (productCard, index) => {
    const newProductCardList = [...this.state.productCard];
    newProductCardList[index] = productCard;
    this.setState({
      productCard: newProductCardList,
    });
  };

  componentDidMount() {
    if (this.props.history.location.search) {
      fetch(`${GET_PRODUCTS_API}${this.props.history.location.search}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            productCard: data.message,
          });
        });
    } else
      fetch(`${GET_PRODUCTS_API}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            productCard: data.message,
          });
        });
  }

  fetchFiltering = () => {
    const query = makeCondition(this.state.filterState);
    fetch(`${GET_PRODUCTS_API}?${query}`)
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
      this.fetchFiltering
    );
  };

  render() {
    const { productCard } = this.state;

    console.log(`this.props.history`, this.props.history.location.search);
    // console.log(`this.state.filterState.name`, this.state.filterState[key]);
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
              filtering={this.filtering}
              // checked={this.state.checked}
              makeCondition={this.makeCondition}
              handleCheckBox={this.handleCheckBox}
            />
          </form>

          <ul className="productList">
            {productCard.map((product, idx) => (
              <ProductCard
                key={idx}
                productCard={product}
                index={idx}
                backgroundColor={
                  BACKGROUNDCOLOR_LIST[idx % BACKGROUNDCOLOR_LIST.length]
                }
                changeProductCard={this.changeProductCard}
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
