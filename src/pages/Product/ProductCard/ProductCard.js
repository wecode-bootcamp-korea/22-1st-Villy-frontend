import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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

  handleCartButton = event => {
    event.preventDefault();

    this.setState({
      addCart: !this.state.addCart,
    });
  };

  render() {
    const { backgroundColor } = this.props;

    const {
      productName,
      productPrice,
      productTablet,
      thumbnail_image_url,
      icon_image_url,
      summary,
      icon_name,
    } = this.props.productCard;
    console.log(`this.props.history`, this.props);
    return (
      <li
        className="ProductCard"
        style={{ backgroundColor }}
        onClick={() =>
          this.props.history.push(`product/${this.props.productCard.productID}`)
        }
      >
        <header className="productCardHeader">
          <div className="nameBox">
            <h2>
              <strong>{productName}</strong>
            </h2>

            <ul className="icon">
              {icon_image_url.map((iconImage, idx) => (
                <ProductIcon
                  key={idx}
                  icon_image_url={iconImage}
                  icon_name={icon_name}
                />
              ))}
            </ul>
          </div>
          <div className="pillImgBox">
            <img
              className="pillImage"
              alt={productName}
              src={thumbnail_image_url}
            />
          </div>
        </header>
        <section className="productCardBody">
          <div className="descriptonBox">
            <ul className="description">
              {summary.map((descriptionItem, idx) => (
                <ProductDescription key={idx} summary={descriptionItem} />
              ))}
            </ul>
          </div>
          <div className="quantityAndpriceBox">
            <p className="quantity">{productTablet}일분</p>
            <p className="price">{parseInt(productPrice).toLocaleString()}원</p>
          </div>
        </section>
        <footer className="productCardFooter">
          <p className="add">더보기</p>
          <button
            className="cartBtn"
            onClick={this.handleCartButton}
            disabled={this.state.addCart}
          >
            {!this.state.addCart && <AiOutlinePlus className="addIcon" />}
            {this.state.addCart ? '장바구니 추가됨' : '장바구니 담기'}
          </button>
        </footer>
      </li>
    );
  }
}

export default withRouter(ProductCard);
