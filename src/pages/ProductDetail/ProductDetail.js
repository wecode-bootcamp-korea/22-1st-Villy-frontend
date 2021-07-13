import React, { Component } from 'react';
import { GET_PRODUCTS_API, POST_ADD_CART_API } from '../../config.js';
import { FaCreativeCommons, FaCreativeCommonsPdAlt } from 'react-icons/fa';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import './ProductDetail.scss';

export class ProductDetail extends Component {
  constructor() {
    super();
    this.set = React.createRef();
    this.state = {
      productData: {},
      recommendToggleOn: false,
      // addedCartAlertList: [],
    };
  }

  componentDidMount() {
    fetch(`${GET_PRODUCTS_API}/${this.props.match.params.productID}`, {
      headers: { Authorization: localStorage.getItem('access_token') },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          productData: data.message[0],
        });
      });
  }

  // addedCartAlert = () => {
  //   const { addedCartAlertList } = this.state;
  //   console.log(`added`, addedCartAlertList);
  //   const copyAddedCartAlertList = [...addedCartAlertList];
  //   copyAddedCartAlertList.push('');
  //   console.log(`object`, copyAddedCartAlertList);
  //   // this.setState({ copyAddedCartAlertList: copyAddedCartAlertList });
  //   // setTimeout(() => {
  //   //   copyAddedCartAlertList.pop();
  //   //   this.setState({ addedCartAlertList: copyAddedCartAlertList });
  //   // }, 3000);
  // };

  postCart = () => {
    const id = this.props.match.params.productID;
    if (this.state.productData.cart_exist) {
      return;
      // this.addedCartAlert();
    } else {
      fetch(`${POST_ADD_CART_API}`, {
        method: 'POST',
        body: JSON.stringify({
          productID: id,
        }),
      });
    }
  };

  addCart = () => {
    this.postCart();
    const copyProductData = { ...this.state.productData };
    copyProductData.cart_exist = true;
    this.setState({ productData: copyProductData });
  };

  toggleFunction = event => {
    const name = event.currentTarget.name;
    this.setState({ [`${name}ToggleOn`]: !this.state[`${name}ToggleOn`] });
  };

  render() {
    if (!this.state.productData.productName) {
      return <div>..Loading</div>;
    } else {
      const { recommendToggleOn } = this.state;
      const {
        icon_image_url,
        productDescription,
        productName,
        productPrice,
        thumbnail_image_url,
        productTablet,
        cart_exist,
      } = this.state.productData;
      return (
        <div className="ProductDetail">
          <main
            style={{
              backgroundColor:
                BACKGROUND_COLOR[this.props.match.params.productID],
            }}
          >
            <header className="headTextWrap">
              <h1>{productName}</h1>
              <div className="propertyIcons">
                {icon_image_url.map((icon, index) => (
                  <img
                    className="propertyIcon"
                    key={index}
                    src={`../${icon}`}
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
                className={`cartButton ${cart_exist ? 'On' : 'Off'}`}
                onClick={this.addCart}
              >
                장바구니 담기
              </button>
            </header>
            <img
              className="productImage"
              src={thumbnail_image_url}
              alt="productImage"
            />
          </main>
          <section className="comment">
            <div className="question">
              <div className="recommendTitle">
                <p className="recommendTitileText">생생 후기를 읽어보세요!</p>
              </div>
              <div className="recommendButtonWrap">
                <button name="recommend" onClick={this.toggleFunction}>
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
          {/* <div className="addedCartAlertWrap">
            {addedCartAlertList.map((list, index) => {
              return (
                <div key={index} className="addedCartAlert">
                  <p>이미 추가되었습니다.</p>
                </div>
              );
            })}
          </div> */}
        </div>
      );
    }
  }
}
export default ProductDetail;

const BACKGROUND_COLOR = [
  '#E9F9FE',
  '#E0B5BA',
  '#EFE9D9',
  '#B1D9F1',
  '#EAE9E9',
  '#AEE19E',
  '#FFF0A6',
  '#CBC5E8',
  '#FAD4BF',
  '#E9F9FE',
];
