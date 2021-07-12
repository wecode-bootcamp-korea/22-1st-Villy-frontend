import React from 'react';
import './CartList.scss';

class CartList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      cartList: [
        {
          id: 1,
          priceName: 'Cheese',
          priceImg:
            'https://images.unsplash.com/photo-1608666566023-e91b02683a5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          price: 19200,
          count: 1,
        },
      ],
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement = () => {
    const cartList = this.state.cartList.map(cart => {
      if (cart.id === cartList.id) {
        return { ...cartList, count: cartList.count + 1 };
      }
      return cart;
    });
    this.setState({ cartList });
  };

  handleDecrement = () => {
    const cartList = this.state.cartList.map(cart => {
      if (cart.id === cartList.id) {
        const count = cartList.count - 1;
        return { ...cartList, count: count <= 1 ? 1 : count };
      }
      return cart;
    });

    this.setState({ cartList });
  };

  // handleIncrement = e => {
  //   console.log(e.target.name);
  //   this.setState({
  //     cartList: this.state.cartList[e.target.name].count + 1,
  //   });
  // };

  // handleDecrement() {
  //   this.setState({
  //     count: this.state.count - 1,
  //   });
  // }

  //cout e.target.id === this.state.countlist.id

  // removeCartItem = (event, id) => {
  //   const { cartData } = this.state;
  //   const newCartData = cartData.filter(cartItem => {
  //     return parseInt(id) !== parseInt(cartItem.id);
  //   });
  //   const deletedData = cartData.filter(cartItem => {
  //     return parseInt(id) === parseInt(cartItem.id);
  //   });
  //   this.setState({ cartData: newCartData, deletedArr: deletedData });
  //   fetchDelete(
  //     `${CART_API}:8000/orders/order-items/${event.target.dataset.id}`
  //   )
  //     .then(res => res.status)
  //     .then(status => {
  //       status === 204 ? alert('삭제성공') : alert('삭제를 실패하였습니다.');
  //     });
  // };

  // handleClick = () => {
  //   this.setState(cart => {
  //     return {
  //       cartList(cart.filter(cart => !cart.id));
  //     };
  //   });
  // };

  // 장바구니 리스트 제거
  // removeCartItem = id => {
  //   const { cartList } = this.state;
  //   const newCartData = cartList.filter(cartItem => {
  //     return parseInt(id) !== parseInt(cartItem.id);
  //   });
  //   const deletedData = cartList.filter(cartItem => {
  //     return parseInt(id) === parseInt(cartItem.id);
  //   });
  //   this.setState({ cartList: newCartData, deletedArr: deletedData });
  // };

  // deleteDiv() {
  //   const deleteDiv = document.getElementById('productList');
  //   deleteDiv.remove();
  // }

  // onRemove = () => {
  //   cartList(cart.filter(user => user.id !== id));
  // };

  // 총 금액 계산
  // getTotalPrice = numArr => {
  //   let totalPrice = 0;
  //   numArr.forEach(el => {
  //     totalPrice += el.count * el.price;
  //   });
  //   return totalPrice;
  // };

  render() {
    const { cartList } = this.props;
    return (
      <ul className="cartList">
        {cartList.map((cart, idx) => {
          return (
            <li className="productList" key={cart.idx}>
              <input id={cart.id} type="checkbox" />
              <img alt="비타민" className="cartListImg" src={cart.productImg} />
              <div className="listDetail">
                <div className="listTop">
                  <p className="listFont">{cart.productName}</p>
                  <button type="button" className="removeButton">
                    삭제
                  </button>
                </div>
                <br />
                <div className="countButtonWrppaer">
                  <div className="btnDetail">
                    <button
                      type="button"
                      className="countButton"
                      onClick={this.handleDecrement}
                    >
                      -
                    </button>
                    <span className="countNum">{this.state.count}</span>
                    <button
                      type="button"
                      className="countButton"
                      name={cart.id}
                      onClick={this.handleIncrement}
                    >
                      +
                    </button>
                  </div>
                  <div className="boxRight">
                    <p className="boxPrice">{cart.price}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CartList;
