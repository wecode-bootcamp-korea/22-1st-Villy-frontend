import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductIcon from './ProductIcon/ProductIcon';
import ProductDescription from './ProductDescription/ProductDescription';

import { AiOutlinePlus } from 'react-icons/ai';

import './ProductCard.scss';

export class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      addCart: false,
    };
  }

  // button color 변경
  handleCartButton = event => {
    event.preventDefault();
    this.setState({
      addCart: !this.state.addCart,
    });
  };

  render() {
    const { addCart } = this.state;

    const { backgruonColor } = this.props;

    const { efficacy, name, icon, pillImage, description, quantity, price } =
      this.props.productCard;

    return (
      <li className="ProductCard" style={{ backgroundColor: backgruonColor }}>
        <Link to="/detail">
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
            <button
              className="cartBtn"
              onClick={this.handleCartButton}
              disabled={this.state.addCart}
            >
              {!addCart && <AiOutlinePlus className="addIcon" />}
              {addCart ? '장바구니 추가됨' : '장바구니 담기'}
            </button>
          </footer>
        </Link>
      </li>
    );
  }
}

export default ProductCard;
