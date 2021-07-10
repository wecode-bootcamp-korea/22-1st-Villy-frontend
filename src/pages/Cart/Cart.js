import React from 'react';
import CartOrder from './CartOrder/CartOrder';
import './Cart.scss';

class Cart extends React.Component {
  handleRemove = id => {
    const { cartList } = this.props;
    const nextList = cartList.filter(cart => {
      return cart.id !== id;
    });
    this.setState({ cartList: nextList });
  };

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
            </div>
          </header>
          <CartOrder />
        </div>
      </div>
    );
  }
}

export default Cart;
