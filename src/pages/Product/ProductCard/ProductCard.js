import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductDescription from './ProductDescription/ProductDescription';

// import { RiEyeCloseLine } from 'react-icons/ri';
// import { GiMuscleUp } from 'react-icons/gi';
// import { BsArrowRepeat } from 'react-icons/bs';
// import { CgGirl } from 'react-icons/cg';
import { AiOutlinePlus } from 'react-icons/ai';

import './ProductCard.scss';
import { computeHeadingLevel } from '@testing-library/react';

export class ProductCard extends Component {
  render() {
    const {
      backgroundColor,
      efficacy,
      name,
      icon,
      pillImage,
      description,
      quantity,
      price,
    } = this.props.productCard;

    return (
      <li className="ProductCard" style={{ backgroundColor: backgroundColor }}>
        <header className="productCardHeader">
          <div className="nameBox">
            <h2>
              {efficacy}
              <br />
              <strong>{name}</strong>
            </h2>

            <ul className="icon">
              {/* map 함수 */}
              {/* <Component icon={RiEyeCloseLine} /> */}

              {/* {icon &&
                icon.map(iconItem => {
                  return (
                    <Component key={iconItem.id} iconSrc={iconItem.iconSrc} />
                  );
                })} */}
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
          <Link className="cartLink">
            <button className="cartBtn">
              <AiOutlinePlus className="addIcon" />
              장바구니 담기
            </button>
          </Link>
        </footer>
      </li>
    );
  }
}

export default ProductCard;
