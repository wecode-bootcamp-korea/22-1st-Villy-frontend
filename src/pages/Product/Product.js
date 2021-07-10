import React, { Component } from 'react';

import ProductCard from './ProductCard/ProductCard';

import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productCard: [],
      addCart: false,
      isModalOn: false,
      // isChecked: false,
      // currentId: 1,
      // 최초 state값을 무엇으로 줘야하지 ?
    };
  }

  componentDidMount() {
    fetch('http://192.168.0.19:8000/products')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productCard: data.message,
          // productCard: data,
        });
      });
  }

  // handleCheckBox = id => {
  //   console.log('이건 onchange');
  //   this.setState({
  //     currentId: id,
  //     isChecked: !this.state.isChecked,
  //   });
  // };

  // popupProductModal = () => {
  //   this.setState({
  //     isModalOn: !this.state.isModalOn,
  //   });
  // };

  render() {
    console.log();

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
          <ul className="productCategory">
            <li className="categoryList">
              <input
                type="checkbox"
                // checked={!isChecked}
                name="efficacy"
                value="모발"
                // onChange={() => this.handleCheckBox(1)}
              />
              <img
                alt="모발"
                className="iconImage"
                src="images/hairstyle.svg"
              />
              모발
            </li>
            <li className="categoryList">
              <input
                type="checkbox"
                // checked={this.state.currentId}
                name="efficacy"
                value="뼈"
                // onChange={() => this.handleCheckBox(2)}
              />
              <img className="iconImage" alt="뼈" src="images/bone.svg" />뼈
            </li>
            <li className="categoryList">
              <input
                type="checkbox"
                // checked={this.state.currentId}
                name="efficacy"
                value="피부"
                // onChange={() => this.handleCheckBox(3)}
              />
              <img className="iconImage" alt="피부" src="images/therapy.svg" />
              피부
            </li>
            <li className="categoryList">
              <input
                type="checkbox"
                // checked={this.state.currentId}
                name="efficacy"
                value="성장"
                // onChange={() => this.handleCheckBox(4)}
              />
              <img className="iconImage" alt="성장" src="images/height.svg" />
              성장
            </li>
          </ul>

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
