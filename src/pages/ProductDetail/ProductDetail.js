import React, { Component } from 'react';
import { GET_PRODUCTS_EFFICACY_API } from '../../config.js';
import { FaCreativeCommons, FaCreativeCommonsPdAlt } from 'react-icons/fa';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import './ProductDetail.scss';

export class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      productData: {},
      cartToggleOn: false,
      recommendToggleOn: false,
      backgroundColor: {
        1: '#E9F9FE',
        2: '#E0B5BA',
        3: '#EFE9D9',
        4: '#B1D9F1',
        5: '#EAE9E9',
        6: '#AEE19E',
        7: '#FFF0A6',
        8: '#CBC5E8',
        9: '#FAD4BF',
      },
    };
  }

  componentDidMount() {
    fetch(`${GET_PRODUCTS_EFFICACY_API}/1.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productData: data,
        });
      });
  }

  ToggleFunction = event => {
    const name = event.currentTarget.name;
    this.setState({ [`${name}ToggleOn`]: !this.state[`${name}ToggleOn`] });
  };

  render() {
    if (!this.state.productData.productID) {
      return <div>..Loading</div>;
    } else {
      const { backgroundColor, cartToggleOn, recommendToggleOn } = this.state;
      const {
        icon_image_url,
        productDescription,
        productID,
        productName,
        productPrice,
        thumbnail_image_url,
        productTablet,
        summary,
      } = this.state.productData;

      return (
        <div className="ProductDetail">
          <main style={{ backgroundColor: backgroundColor[productID] }}>
            <header className="headTextWrap">
              <ul className="summaryList">
                {summary.map((summary, index) => (
                  <li className="summary" key={index}>
                    {summary}
                  </li>
                ))}
              </ul>
              <h1>{productName}</h1>
              <div className="propertyIcons">
                {icon_image_url.map((icon, index) => (
                  <img
                    className="propertyIcon"
                    key={index}
                    src={icon}
                    alt="icon"
                  />
                ))}
              </div>
              {productDescription.split(`\n`).map((line, index) => (
                <p key={index} className="productDescription">
                  {line}
                </p>
              ))}
              <div className="productSaleInfo">
                <span className="tablet">{productTablet}일분</span>
                <span className="price">
                  {parseInt(productPrice).toLocaleString()}원
                </span>
              </div>
              <ul className="certificationIcons">
                <li className="certificationIconList">
                  <FaCreativeCommons className="certificationIcon" />
                </li>
                <li className="certificationIconList">
                  <FaCreativeCommonsPdAlt className="certificationIcon" />
                </li>
              </ul>
              <button
                name="cart"
                className={`cartButton ${cartToggleOn ? 'On' : 'Off'}`}
                onClick={this.ToggleFunction}
              >
                장바구니 담기
              </button>
            </header>
            <i className={thumbnail_image_url}></i>
          </main>
          <section className="comment">
            <div className="question">
              <div className="recommendTitle">
                <p className="recommendTitileText">생생 후기를 읽어보세요!</p>
              </div>
              <div className="recommendButtonWrap">
                <button name="recommend" onClick={this.ToggleFunction}>
                  {recommendToggleOn ? (
                    <RiArrowUpSLine className="recommendToggleButtonIcon" />
                  ) : (
                    <RiArrowDownSLine className="recommendToggleButtonIcon" />
                  )}
                </button>
              </div>
            </div>
            {recommendToggleOn && (
              <div className="answer">
                <p className="recommendDescription">
                  언제나 애용하고 있습니다.
                  <br /> -직장인 김모씨-
                </p>
              </div>
            )}
          </section>
        </div>
      );
    }
  }
}
export default ProductDetail;
