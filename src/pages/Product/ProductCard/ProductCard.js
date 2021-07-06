import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import ProductDec from './ProductDec/ProductDec';

import { RiEyeCloseLine } from 'react-icons/ri';
import { GiMuscleUp } from 'react-icons/gi';
import { BsArrowRepeat } from 'react-icons/bs';
import { CgGirl } from 'react-icons/cg';
import { AiOutlinePlus } from 'react-icons/ai';

import './ProductCard.scss';

export class ProductCard extends Component {
  render() {
    // console.log(
    //   `this.props.ProductCard.description.descriptionList`,
    //   this.props.ProductCard.description.descriptionList
    // );
    const {
      backgroundColor,
      efficacy,
      name,
      icon,
      pillImage,
      description,
      quantity,
      price,
      addedDec,
    } = this.props.productCard;

    return (
      <li className="ProductCard" style={{ backgroundColor: backgroundColor }}>
        <header className="ProductCardHeader">
          <div className="toLeft">
            <h2>
              {efficacy}
              <br />
              <strong>{name}</strong>
            </h2>

            <ul className="icon">
              <RiEyeCloseLine />
              <GiMuscleUp />
              <BsArrowRepeat />
              <CgGirl />
              {/* 아이콘을 데이터로 받아올 수 있을까? */}
              {/* {icon ? icon.map(iconItem => {}) : null} */}
            </ul>
          </div>
          <div className="toRight">
            <img className="pillImage" src={pillImage} alt="pillImage" />
          </div>
        </header>
        <section className="ProductCardBody">
          <div className="toLeft">
            <ul className="description">
              {description
                ? description.map(descriptionItem => {
                    return (
                      <ProductDec
                        key={descriptionItem.id}
                        description={descriptionItem.descriptionList}
                      />
                    );
                  })
                : null}
            </ul>
          </div>
          <div className="toRight">
            <p className="quantity">{quantity}일</p>
            <p>{price}원</p>
          </div>
        </section>
        <footer className="ProductCardFooter">
          <p className="addedDec">{addedDec}</p>
          <button className="cartBtn">
            <AiOutlinePlus />
            장바구니 담기
          </button>
        </footer>
      </li>
    );
  }
}

export default ProductCard;
