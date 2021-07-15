import React from 'react';
import { ORDER_API } from '../../../../src/config.js';
import { Link } from 'react-router-dom';
import './Order.scss';

class Order extends React.Component {
  constructor() {
    super();
    this.state = {
      orderList: [],
      point: 0,
    };
  }

  componentDidMount() {
    fetch(`${ORDER_API}`, {
      headers: { Authorization: localStorage.getItem('access_token') },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          orderList: res.product[res.product.length - 1],
          point: res.point,
        });
      });
  }

  render() {
    const { orderList, point } = this.state;

    return (
      <div className="Order">
        <h1 className="orderTitle">
          주문이 <p className="orderLine"> 완료 </p>되었습니다!
        </h1>
        <div className="orderContent">
          <p className="orderNum">주문 번호 : {orderList.orderNumber}</p>
          <p className="orderNum">잔여 포인트 : {point.toLocaleString()}P</p>
        </div>
        <Link to="/product">
          <button type="submit" className="orderBtn">
            더 둘러보기
          </button>
        </Link>
      </div>
    );
  }
}

export default Order;
