import React from 'react';
import { CARTLIST } from '../../../src/config.js';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      deleteBtn: false, // 조건부 렌더링
    };
    console.log(this.state.cartList.length);
  }

  // 백엔드에 데이터 보내는 함수
  postFetch = e => {
    const target = this.state.cartList[e.target.name];
    fetch(`${CARTLIST}`, {
      method: 'PATCH',
      body: JSON.stringify({
        productID: target.productID,
        quantity: target.quantity,
      }),
    });
    console.log(this.state.cartList);
  };

  // 백엔드랑 연결
  componentDidMount() {
    fetch(`${CARTLIST}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          cartList: res.data,
        });
        console.log(this.state.cartList);
      });
  }

  // mock data 연결
  // componentDidMount() {
  //   fetch('/data/CartListData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         cartList: data,
  //       });
  //     });
  // }

  handleIncrement = e => {
    const id = Number(e.target.name);
    this.postFetch(e);
    // console.log(`props`, e.target.name);
    // console.log(`state`, this.state.cartList);

    const newCartList = [...this.state.cartList];
    // console.log(`ea`, newCartList[id].ea + 1);
    const newEa = newCartList[id].quantity + 1;
    newCartList[id] = { ...newCartList[id], quantity: newEa };

    this.setState({
      cartList: newCartList,
    });
  };

  handleDecrement = e => {
    const id = Number(e.target.name);
    this.postFetch(e);

    const newCartList = [...this.state.cartList];
    const newEa = newCartList[id].quantity - 1;
    newCartList[id] = { ...newCartList[id], quantity: newEa };

    if (newCartList[id].quantity <= 0) {
      return;
    }

    this.setState({
      cartList: newCartList,
    });
  };

  handleDelete = e => {
    fetch(`${CARTLIST}`, {
      method: 'DELETE',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify({
        productID: e.target.name,
      }),
    }).then(
      fetch(`${CARTLIST}`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            cartList: data.product,
          });
        })
    );
  };

  render() {
    const { cartList, deleteBtn } = this.state;
    console.log(this.state.cartList);
    if (deleteBtn) {
      return (
        <div className="Cart">
          <div className="cartView">
            <header className="cartTop">
              <h1 className="cartTopTitle">장바구니</h1>
              <div className="cartTopButtonWrppaer">
                <button type="button" className="topBtn">
                  + 제품추가
                </button>
              </div>
            </header>
            <div className="CartListNull">
              <img
                alt="상품 리스트 없음"
                className="nullImg"
                src="/images/ListNull.png"
              />
              <h1 className="nullTitle">장바구니에 추가된 제품이 없습니다.</h1>
              <p className="nullContent">
                몇가지 건강설문을 통해 <br />
                나만을 위한 영양성분을 찾아보세요.
              </p>
              <button type="submit" className="nullBtn">
                나만의 영양성분 찾기
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Cart">
          <div className="cartView">
            <header className="cartTop">
              <h1 className="cartTopTitle">장바구니</h1>
              <div className="cartTopButtonWrppaer">
                <button type="button" className="topBtn">
                  + 제품추가
                </button>
              </div>
            </header>
            <h2 className="cartListTitle">정기구독 제품</h2>
            <ul className="cartList">
              {cartList &&
                cartList.map(
                  (
                    {
                      productID,
                      productName,
                      thumbnail_image_url,
                      productPrice,
                      quantity,
                    },
                    idx
                  ) => {
                    return (
                      <li className="productList" key={idx} name={productID}>
                        <input type="checkbox" />
                        <img
                          alt="비타민"
                          className="cartListImg"
                          src={thumbnail_image_url}
                        />
                        <div className="listDetail">
                          <div className="listTop">
                            <p className="listFont">{productName}</p>
                            <button
                              type="button"
                              className="removeButton"
                              onClick={this.handleDelete}
                              name={productID}
                            >
                              삭제
                            </button>
                          </div>
                          <br />
                          <div className="countButtonWrppaer">
                            <div className="btnDetail">
                              <button
                                type="button"
                                className="countButton"
                                name={idx}
                                onClick={this.handleDecrement}
                              >
                                -
                              </button>
                              <span className="countNum">{quantity}</span>
                              <button
                                type="button"
                                className="countButton"
                                name={idx}
                                onClick={this.handleIncrement}
                              >
                                +
                              </button>
                            </div>
                            <div className="boxRight">
                              <p className="boxPrice">
                                {parseInt(productPrice * quantity)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  }
                )}
            </ul>

            <div className="cartDetail">
              <div className="cartBox">
                <div className="cartRead">
                  <p>정기구독 제품합계</p>
                  <p>0원</p>
                </div>
                <div className="deliveryPrice">
                  <p>배송비</p>
                  <p>2,500원</p>
                </div>
              </div>
              <div className="productView">
                <div className="productDiscount">
                  <p className="discountTitle">정기구독 할인혜택</p>
                  <p>0원</p>
                </div>
                <div className="deliveryDiscount">
                  <p>배송비 무료</p>
                  <p>-2,500원</p>
                </div>
                <div className="pointDiscount">
                  <p>포인트 할인</p>
                  <p>0원</p>
                </div>
              </div>
            </div>
            <div className="cartPrice">
              <p className="totalPriceText">총 결제금액</p>
              <p className="totalPrice">1000</p>
            </div>
            <div className="cartFooterButtonWrppaer">
              <button
                type="submit"
                className="resultBtn"
                onClick={this.postFetch}
              >
                결제하기
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
