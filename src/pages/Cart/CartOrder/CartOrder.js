import React from 'react';
import CartList from '../CartList/CartList';
import './CartOrder.scss';

class CartOrder extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  componentDidMount() {
    fetch('/data/CartListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartList: data,
        });
      });
  }

  render() {
    const { cartList } = this.state;
    return (
      <>
        <h2 className="cartListTitle">정기구독 제품</h2>
        <CartList cartList={cartList} />

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
      </>
    );
  }
}

export default CartOrder;
