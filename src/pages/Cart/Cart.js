import React from 'react';
import CartCount from './CartCount';
import './Cart.scss';

class Cart extends React.Component {
  render() {
    return (
      <div className="Cart">
        <div className="cartView">
          <header className="cartTop">
            <h1 className="cartTopTitle">장바구니</h1>
            <div className="cartTopButtonWrppaer">
              <button type="button" className="topBtn">
                + 제품추가
              </button>
              <button type="button" className="topBtn">
                삭제
              </button>
            </div>
          </header>
          <h2 className="cartListTitle">정기구독 제품</h2>
          <div className="cartList">
            <input type="checkbox" />
            <img
              alt="비타민"
              className="cartListImg"
              src="/images/pill1.jpeg"
            />
            <div className="listDetail">
              <p className="listFont">히알루론산 스피루리나</p>
              <br />
              <div className="countButtonWrppaer">
                <CartCount />
                <div className="boxRight">
                  <p className="boxPrice">19,500원</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cartDetail">
            <div className="cartBox">
              <div className="cartRead">
                <p>정기구독 제품합계</p>
                <p>19,500원</p>
              </div>
              <div className="deliveryPrice">
                <p>배송비</p>
                <p>2,500원</p>
              </div>
            </div>
            <div className="productView">
              <div className="productDiscount">
                <p className="discountTitle">정기구독 할인혜택</p>
                <p>총 2,500원</p>
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
            <p className="totalPrice">19,500원</p>
          </div>
          <div className="cartFooterButtonWrppaer">
            <button type="submit" className="resultBtn">
              결제하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
