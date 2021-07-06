import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// import ProductDec from './ProductDec/ProductDec';

import { RiEyeCloseLine } from 'react-icons/ri';
import { GiMuscleUp } from 'react-icons/gi';
import { BsArrowRepeat } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { CgGirl } from 'react-icons/cg';

import './ProductCard.scss';

export class ProductCard extends Component {
  render() {
    console.log(this.props.description);
    return (
      <li
        className="ProductCard"
        style={{ backgroundColor: this.props.backgroundColor }}
      >
        <header className="ProductCardHeader">
          <div className="toLeft">
            <h2>
              {this.props.efficacy}
              <br />
              <strong>{this.props.name}</strong>
            </h2>
            <ul className="icon">
              {/* 여기도 데이터로 받아와야함 */}
              <RiEyeCloseLine />
              <GiMuscleUp />
              <BsArrowRepeat />
              <CgGirl />
            </ul>
          </div>
          <div className="toRight">
            <img
              className="pillImage"
              src={this.props.pillImage}
              alt="pillImage"
            />
          </div>
        </header>
        <section className="ProductCardBody">
          <div className="toLeft">
            <ul className="description">
              {/* {this.props.description.map(description => {
                return (
                  <ProductDec
                    key={description.id}
                    discriptionList={description.discriptionList}
                  />
                );
              })} */}
            </ul>
          </div>
          <div className="toRight">
            <p className="quantity">{this.props.quantity}일</p>
            <p> {this.props.price}원</p>
          </div>
        </section>
        <footer className="ProductCardFooter">
          <p className="addedDec">{this.props.addedDec}</p>
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
