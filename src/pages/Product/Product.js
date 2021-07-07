import React, { Component } from 'react';
import ProductCard from './ProductCard/ProductCard';
import './Product.scss';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productCard: [],
      cardBackground: CARDBACKGROUND,
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
  // handleClick = () => {
  //   this.setState({
  //     isModalOn: !this.state.isModalOn,
  //   });
  // };

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
          <ul className="productList">
            {this.state.productCard.map(product => (
              <ProductCard
                key={product.id}
                productCard={product}
                // 모달찰 구현중 입니다.
                // handleClick={this.handleClick}
                cardBackground={
                  this.state.cardBackground &&
                  this.state.cardBackground.map(cardColor => {
                    return { cardColor };
                  })
                }
              />
            ))}
          </ul>
        </section>
        {/* 모달창 구현 중입니다 ! */}
        {/* <button style={{ cursor: 'pointer' }}>실험!</button>
        {this.state.isModalOn && <div>자식요소에서 일어나는 이벤트 반영</div>} */}
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
