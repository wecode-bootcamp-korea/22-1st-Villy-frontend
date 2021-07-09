import React, { Component } from 'react';

import ProductCard from './ProductCard/ProductCard';
// import ProductModal from './ProductModal/ProductModal';
import './Product.scss';
// import { AiOutlineBgColors } from 'react-icons/ai';

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      productCard: [],
      addCart: false,
      isModalOn: false,
    };
  }

  componentDidMount() {
    fetch('http://10.58.2.138:8000/products')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productCard: data.message,
        });
      });
  }

  popupProductModal = () => {
    this.setState({
      isModalOn: !this.state.isModalOn,
    });
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

          <ul className="productCategory">
            <li className="categoryList">
              <input type="checkbox" name="category" value="모발" />
              <img
                alt="모발"
                className="iconImage"
                src="images/hairstyle.svg"
              />
              <span className="categoryText">모발</span>
            </li>
            <li className="categoryList">
              <input type="checkbox" name="category" value="뼈" />
              <img className="iconImage" alt="뼈" src="images/bone.svg" />
              <span className="categoryText">뼈</span>
            </li>
            <li className="categoryList">
              <input type="checkbox" name="category" value="피부" />
              <img className="iconImage" alt="피부" src="images/therapy.svg" />
              <span className="categoryText">피부</span>
            </li>
            <li className="categoryList">
              <input type="checkbox" name="color" value="성장" />
              <img className="iconImage" alt="성장" src="images/height.svg" />
              <span className="categoryText">성장</span>
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
          <button onClick={this.popupProductModal}>실험용</button>
          {/* <ul className="ProductModal">
            {this.state.isModalOn &&
              this.state.productCard.map(modal => (
                <ProductModal key={modal.id} name={modal.name} />
              ))}
          </ul> */}
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
