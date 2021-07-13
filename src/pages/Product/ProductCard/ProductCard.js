import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductIcon from './ProductIcon/ProductIcon';
import ProductDescription from './ProductDescription/ProductDescription';

import { AiOutlinePlus } from 'react-icons/ai';

import './ProductCard.scss';

export class ProductCard extends Component {
  handleCartButton = event => {
    const targetName = event.target.name;
    event.preventDefault();
    console.log(event.target.name);
    console.log(this.props.productCard.cart_exist);
    //전달해줄 값 정의
    // 여기에 POST
    //조건 true면 리턴하고
    if (this.props.productCard.cart_exist) {
      return;
    } else {
      fetch('http://10.58.1.111:8000/carts', {
        method: 'POST',
        body: JSON.stringify({
          productID: targetName,
        }),
      });
    }
  };

  render() {
    console.log(this.props.productCard);

    const { backgroundColor } = this.props;

    const {
      productName,
      icon_image_url,
      thumbnail_image_url,
      summary,
      productTablet,
      productPrice,
      cart_exist,
      productID,
    } = this.props.productCard;

    return (
      <li
        className="ProductCard"
        style={{ backgroundColor }}
        onClick={this.goToDetail}
      >
        <Link to={`/products/${productID}`}>
          <header className="productCardHeader">
            <div className="nameBox">
              <h2>
                <strong>{productName}</strong>
              </h2>

              <ul className="icon">
                {icon_image_url.map((iconImage, idx) => (
                  <ProductIcon key={idx} icon_image_url={iconImage} />
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
              <p className="price">
                {parseInt(productPrice).toLocaleString()}원
              </p>
            </div>
          </section>
          <footer className="productCardFooter">
            <p className="add">더보기</p>
            <button
              name={productID}
              className="cartBtn"
              onClick={this.handleCartButton}
              disabled={cart_exist}
            >
              {!cart_exist && <AiOutlinePlus className="addIcon" />}
              {cart_exist ? '장바구니 추가됨' : '장바구니 담기'}
            </button>
          </footer>
        </Link>
      </li>
    );
  }
}

export default ProductCard;
