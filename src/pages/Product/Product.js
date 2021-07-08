import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import ProductCard from './ProductCard/ProductCard';
import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productCard: [],
      isModalOn: false,
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

  // 모달창 구현 중 입니다 !
  handleClick = () => {};

  ShowModal = () => {
    console.log('클릭쓰!');
    this.setState({
      isModalOn: !this.state.isModalOn,
    });
  };

  render() {
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
          {/* 기능 확인 위한 코드 */}
          <ul className="ProdcutCategory">
            <li>
              <Link>혈액순환</Link>
            </li>
            <li>
              <Link>눈</Link>
            </li>
            <li>
              <Link>탄력</Link>
            </li>
            <li>
              <Link>피부</Link>
            </li>
          </ul>
          <ul className="productList">
            {this.state.productCard.map((product, idx) => (
              <ProductCard
                key={product.id}
                productCard={product}
                backgruonColor={
                  BACKGROUNDCOLOR_LIST[idx % BACKGROUNDCOLOR_LIST.length]
                }
                handleCartButton={this.handleCartButton}
                // 모달찰 구현중 입니다.
              />
            ))}
          </ul>
        </section>
        {/* 모달창 구현 중입니다 ! */}
        <button style={{ cursor: 'pointer' }} onClick={this.handleClick}>
          실험!
        </button>
        {this.state.isModalOn && <div>자식요소에서 일어나는 이벤트 반영</div>}
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
