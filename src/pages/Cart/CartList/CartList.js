import React from 'react';
import CartCount from '../CartCount/CartCount';
import './CartList.scss';

class CartList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
      selectedArr: [],
      deletedArr: [],
    };
  }

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
  removeCartItem = id => {
    const { cartList } = this.state;
    const newCartData = cartList.filter(cartItem => {
      return parseInt(id) !== parseInt(cartItem.id);
    });
    const deletedData = cartList.filter(cartItem => {
      return parseInt(id) === parseInt(cartItem.id);
    });
    this.setState({ cartList: newCartData, deletedArr: deletedData });
  };

  // deleteDiv() {
  //   const deleteDiv = document.getElementById('productList');
  //   deleteDiv.remove();
  // }

  // onRemove = () => {
  //   cartList(cart.filter(user => user.id !== id));
  // };

  // 총 금액 계산
  getTotalPrice = numArr => {
    let totalPrice = 0;
    numArr.forEach(el => {
      totalPrice += el.count * el.price;
    });
    return totalPrice;
  };

  render() {
    console.log(this.props.cartList);
    const { cartList } = this.props;
    return (
      <ul className="cartList">
        {cartList.map((cart, id) => {
          return (
            <li className="productList" key={cart.id}>
              <input id={cart.id} type="checkbox" />
              <img alt="비타민" className="cartListImg" src={cart.productImg} />
              <div className="listDetail">
                <div className="listTop">
                  <p className="listFont">{cart.productName}</p>
                  <button
                    type="button"
                    className="removeButton"
                    onClick={this.deleteDiv()}
                  >
                    삭제
                  </button>
                </div>
                <br />
                <div className="countButtonWrppaer">
                  <CartCount />
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
