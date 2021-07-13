import React from 'react';
import { CARTLIST } from '../../../src/config.js';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      point: 0,
    };
  }

  // 백엔드에 데이터 보내는 함수
  responseQuantity = (productID, quantity) => {
    fetch(`${CARTLIST}`, {
      method: 'PATCH',
      body: JSON.stringify({
        productID: productID,
        quantity: quantity,
      }),
      headers: { Authorization: localStorage.getItem('access_token') },
    });
  };

  // 백엔드랑 연결
  componentDidMount() {
    fetch(`${CARTLIST}`, {
      headers: { Authorization: localStorage.getItem('access_token') },
    })
      .then(res => res.json())
      .then(res => {
        console.log(`res`, res);
        this.setState({
          cartList: res.data,
          point: res.point,
        });
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

  handleIncrement = index => {
    const newCartList = [...this.state.cartList];
    const newEa = newCartList[index].quantity + 1;
    newCartList[index] = { ...newCartList[index], quantity: newEa };
    this.setState({
      cartList: newCartList,
    });
    this.responseQuantity(this.state.cartList[index].productID, newEa + 1);
  };

  handleDecrement = index => {
    const newCartList = [...this.state.cartList];
    const newEa = newCartList[index].quantity - 1;
    newCartList[index] = { ...newCartList[index], quantity: newEa };
    if (newCartList[index].quantity <= 0) {
      return;
    }
    this.setState({
      cartList: newCartList,
    });
    this.responseQuantity(this.state.cartList[index].productID, newEa - 1);
  };

  handleDelete = id => {
    fetch(`${CARTLIST}`, {
      method: 'DELETE',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify({
        productID: id,
      }),
    }).then(
      fetch(`${CARTLIST}`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            cartList: data.data,
          });
        })
    );
  };

  render() {
    const { cartList } = this.state;
    const totalPrice = this.state.cartList
      .map(cart => cart.productPrice * cart.quantity)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const result = parseInt(this.state.point - totalPrice);
    if (this.state.cartList.length === 0) {
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
    }
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
                  index
                ) => {
                  return (
                    <li className="productList" key={productID}>
                      <div className="cartListImgWrapper">
                        <img
                          alt="비타민"
                          className="cartListImg"
                          src={thumbnail_image_url}
                        />
                      </div>
                      <div className="listDetail">
                        <div className="listTop">
                          <p className="listFont">{productName}</p>
                          <button
                            type="button"
                            className="removeButton"
                            onClick={() => this.handleDelete(productID)}
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
                              onClick={() => this.handleDecrement(index)}
                            >
                              -
                            </button>
                            <span className="countNum">{quantity}</span>
                            <button
                              type="button"
                              className="countButton"
                              onClick={() => this.handleIncrement(index)}
                            >
                              +
                            </button>
                          </div>
                          <div className="boxRight">
                            <p className="boxPrice">
                              {(productPrice * quantity).toLocaleString()}원
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
            <div className="productView">
              <div className="productDiscount">
                <p className="discountTitle">현재 보유 중인 포인트</p>
                <p>{parseInt(this.state.point).toLocaleString()}P</p>
              </div>
              <div className="deliveryDiscount">
                <p>차감 포인트</p>
                <p>-{totalPrice.toLocaleString()}P</p>
              </div>
            </div>
          </div>
          <div className="cartPrice">
            <p className="totalPriceText">잔여 포인트</p>
            <p className="totalPrice">{result.toLocaleString()}P</p>
          </div>
          <div className="cartFooterButtonWrppaer">
            <button
              type="submit"
              className="resultBtn"
              onClick={this.responseQuantity}
            >
              결제하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
