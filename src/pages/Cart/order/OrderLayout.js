import React from 'react';
import { CARTLIST, POST_ORDER_API } from '../../../../src/config.js';
import './OrderLayout.scss';
class OrderLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      orderList: {},
    };
  }
  componentDidMount() {
    fetch(`${POST_ORDER_API}`, {
      headers: { Authorization: localStorage.getItem('access_token') },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          orderList: res.product[0],
        });
        console.log(`res`, res);
      });
  }
  render() {
    return (
      <div className="Order">
        <h1 className="orderTitle">주문해주셔서 감사합니다!</h1>
        <div className="orderContent">
          <p class="orderNum">주문번호 :{this.state.orderList.orderNumber}</p>
        </div>
        <button type="submit" className="orderBtn">
          홈으로
        </button>
      </div>
    );
  }
}
export default OrderLayout;
