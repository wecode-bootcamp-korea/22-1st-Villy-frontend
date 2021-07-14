import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { CARTLIST } from '../../../config';

import ProductIcon from './ProductIcon/ProductIcon';
import ProductDescription from './ProductDescription/ProductDescription';

import { AiOutlinePlus } from 'react-icons/ai';

import './ProductCard.scss';

export class ProductCard extends Component {
  //조건에 따른 이동
  goToDetail = event => {
    const { cart_exist } = this.props.productCard;
    if (event.target.className === 'cartBtn') {
      if (cart_exist) {
        return;
      } else {
        // 버튼 컬러를 변경하고, fetch해라(담아줄 정보값 : id, cart_exist는 true)
        fetch(`${CARTLIST}`, {
          method: 'POST',
          headers: { Authorization: localStorage.getItem('access_token') },
          body: JSON.stringify({
            productID: event.target.name,
          }),
        });
      }
    } else {
      this.props.history.push(`product/${this.props.productCard.productID}`);
    }
  };

  // addCart = () => {
  //   const { cart_exist } = this.props.productCard;
  //   const buttonState = { ...this.props.productCard };
  //   buttonState.cart_exist = !cart_exist;
  //   this.setState({ productCard: buttonState });
  // };

  render() {
    console.log(this.props.p);
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
            <p className="price">{parseInt(productPrice).toLocaleString()}원</p>
          </div>
        </section>
        <footer className="productCardFooter">
          <p className="add">더보기</p>
          <button
            name={productID}
            className="cartBtn"
            disabled={cart_exist}
            onClick={this.addCart}
          >
            {!cart_exist && <AiOutlinePlus className="addIcon" />}
            {cart_exist ? '장바구니 추가됨' : '장바구니 담기'}
          </button>
        </footer>
      </li>
    );
  }
}

export default withRouter(ProductCard);
