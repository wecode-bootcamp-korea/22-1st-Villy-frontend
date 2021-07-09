import React, { Component } from 'react';
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
    fetch('http://10.58.2.138:8000/products/1')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productData: data.message,
        });
      });
  }

  ToggleFunction = event => {
    const name = event.currentTarget.name;
    this.setState({ [`${name}ToggleOn`]: !this.state[`${name}ToggleOn`] });
  };

  render() {
    if (!this.state.productData[0]) {
      return <div>..Loading</div>;
    } else {
      const { backgroundColor, cartToggleOn, recommendToggleOn } =
        this.state.productData;
      const {
        icon_name,
        icon_image_url,
        productDescription,
        productID,
        productName,
        productPrice,
        thumbnail_image_url,
        icon,
      } = this.state.productData[0];
      console.log(`this.state.productData[0]`, this.state.productData[0]);
      return (
        <div className="ProductDetail">
          <main>
            {/* <main style={{ backgroundColor: backgroundColor[productID] }}> */}
            <header className="headTextWrap">
              {icon_name.map((el, index) => (
                <p key={index}>{el}</p>
              ))}
              <h1>
                <br />
                {productName}
              </h1>
              <ul className="propertyIcons">
                {icon_image_url.map((el, index) => (
                  <img key={index} src={el} alt="icon" />
                ))}
              </ul>
              <p>{productDescription}</p>
              <strong>{productPrice}</strong>
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
                <p className="recommendTitileText">써보니까 너무 좋아요!</p>
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
