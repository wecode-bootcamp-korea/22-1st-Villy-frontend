import React from 'react';
import './Cart.scss';

class Cart extends React.Component {
  render() {
    return (
      <div className="Cart">
        <div className="cartView">
          <div className="cartTop">
            <h1>장바구니</h1>
            <div className="cartTopBtn">
              <button type="button">+ 제품추가</button>
              <button type="button">휴지통</button>
            </div>
          </div>

          <h2>정기구독 제품</h2>
          <div className="cartList">
            <input type="checkbox" />
            <img alt="이미지" src="http://localhost:3000/images/pill1.jpeg" />
            <div className="listDetail">
              <p className="listFont">히알루론산 스피루리나</p>
              <br />
              <div className="countBtn">
                <div className="btnDetail">
                  <button type="button">-</button>1
                  <button type="button">+</button>
                </div>
                <div className="productPrice">
                  <p>19,500원</p>
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
                <p>정기구독 할인혜택</p>
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
            <p>총 결제금액</p>
            <p className="totalPrice">19,500원</p>
          </div>
          <div className="cartFooterBtn">
            <button type="submit">결제하기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
