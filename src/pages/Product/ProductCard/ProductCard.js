import React, { Component } from 'react';

import ProductIcon from './ProductIcon/ProductIcon';
import ProductDescription from './ProductDescription/ProductDescription';

import { AiOutlinePlus } from 'react-icons/ai';

import './ProductCard.scss';

export class ProductCard extends Component {
  handleCartButton = () => {
    console.log(`클릭!`);
  };

  render() {
    const { efficacy, name, icon, pillImage, description, quantity, price } =
      this.props.productCard;

    return (
      <li className="ProductCard">
        <header className="productCardHeader">
          <div className="nameBox">
            <h2>
              {efficacy}
              <br />
              <strong>{name}</strong>
            </h2>

            <ul className="icon">
              {icon &&
                icon.map(iconItem => {
                  return (
                    <ProductIcon
                      key={iconItem.id}
                      src={iconItem.src}
                      alt={iconItem.alt}
                    />
                  );
                })}
            </ul>
          </div>
          <div className="pillImgBox">
            <img className="pillImage" src={pillImage} alt="pillImage" />
          </div>
        </header>
        <section className="productCardBody">
          <div className="descriptonBox">
            <ul className="description">
              {description &&
                description.map(descriptionItem => {
                  return (
                    <ProductDescription
                      key={descriptionItem.id}
                      description={descriptionItem.descriptionList}
                    />
                  );
                })}
            </ul>
          </div>
          <div className="quantityAndpriceBox">
            <p className="quantity">{quantity}일분</p>
            <p className="price">{price}원</p>
          </div>
        </section>
        <footer className="productCardFooter">
          <p className="add">더보기</p>
          <button className="cartBtn" onClick={this.handleCartButton}>
            <AiOutlinePlus className="addIcon" />
            <span className="buttonText">장바구니 담기</span>
          </button>
        </footer>
      </li>
    );
  }
}

export default ProductCard;
