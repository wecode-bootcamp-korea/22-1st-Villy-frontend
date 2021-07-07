import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductDec from './ProductDec/ProductDec';

import { RiEyeCloseLine } from 'react-icons/ri';
// import { GiMuscleUp } from 'react-icons/gi';
// import { BsArrowRepeat } from 'react-icons/bs';
// import { CgGirl } from 'react-icons/cg';
import { AiOutlinePlus } from 'react-icons/ai';

import './ProductCard.scss';

export class ProductCard extends Component {
  render() {
    const {
      backgroundColor,
      efficacy,
      name,
      // icon,
      pillImage,
      description,
      quantity,
      price,
      add,
    } = this.props.productCard;

    return (
      <Link to="/Signup">
        <li
          className="ProductCard"
          style={{ backgroundColor: backgroundColor }}
        >
          <header className="ProductCardHeader">
            <div className="nameBox">
              <h2>
                {efficacy}
                <br />
                <strong>{name}</strong>
              </h2>

              <ul className="icon">
                {/* <Component icon={RiEyeCloseLine} /> */}
              </ul>
            </div>
            <div className="pillImgBox">
              <img className="pillImage" src={pillImage} alt="pillImage" />
            </div>
          </header>
          <section className="ProductCardBody">
            <div className="decBox">
              <ul className="description">
                {description &&
                  description.map(descriptionItem => {
                    return (
                      <ProductDec
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
          <footer className="ProductCardFooter">
            <p className="add">{add}</p>
            <Link to="/Main">
              <button className="cartBtn">
                <AiOutlinePlus />
                장바구니 담기
              </button>
            </Link>
          </footer>
        </li>
      </Link>
    );
  }
}

export default ProductCard;
