import React from 'react';
import './Cart.scss';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
    // this.handleIncrement = this.handleIncrement.bind(this);
    // this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleRemove = id => {
    const { cartList } = this.props;
    const nextList = cartList.filter(cart => {
      return cart.id !== id;
    });
    this.setState({ cartList: nextList });
  };

  componentDidMount() {
    fetch('/data/CartListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartList: data,
        });
        console.log(data);
      });
  }

  // handleIncrement = () => {
  //   const cartList = this.state.cartList.map(cart => {
  //     if (cart.id === cartList.id) {
  //       return { ...cartList, count: cartList.count + 1 };
  //     }
  //     return cart;
  //   });
  //   this.setState({ cartList });
  // };

  // handleDecrement = () => {
  //   const cartList = this.state.cartList.map(cart => {
  //     if (cart.id === cartList.id) {
  //       const count = cartList.count - 1;
  //       return { ...cartList, count: count <= 1 ? 1 : count };
  //     }
  //     return cart;
  //   });

  //   this.setState({ cartList });
  // };
  // this.state.cartList[ex].ea + 1
  handleIncrement = e => {
    const id = Number(e.target.name);
    // console.log(`props`, e.target.name);
    // console.log(`state`, this.state.cartList);

    const newCartList = [...this.state.cartList];
    // console.log(`ea`, newCartList[id].ea + 1);
    const newEa = newCartList[id].ea + 1;
    newCartList[id] = { ...newCartList[id], ea: newEa };

    this.setState({
      cartList: newCartList,
    });
  };

  handleDecrement = e => {
    const id = Number(e.target.name);

    const newCartList = [...this.state.cartList];
    const newEa = newCartList[id].ea - 1;
    newCartList[id] = { ...newCartList[id], ea: newEa };

    this.setState({
      cartList: newCartList,
    });
  };

  // componentDidMount() {
  //   this.setState({ cartList: this.props.cartList });
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
    const { cartList } = this.state;
    console.log(`render`, this.state.cartList[0]);
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
                ({ id, productName, productImg, price, ea }, idx) => {
                  return (
                    <li className="productList" key={idx} name={id}>
                      <input type="checkbox" />
                      <img
                        alt="비타민"
                        className="cartListImg"
                        src={productImg}
                      />
                      <div className="listDetail">
                        <div className="listTop">
                          <p className="listFont">{productName}</p>
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
                              name={idx}
                              onClick={this.handleDecrement}
                            >
                              -
                            </button>
                            <span className="countNum">{ea}</span>
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
                            <p className="boxPrice">{price}</p>
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
