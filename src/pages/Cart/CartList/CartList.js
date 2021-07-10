import React from 'react';
import CartCount from '../CartCount/CartCount';
import './CartList.scss';

class CartList extends React.Component {
  render() {
    const { cartList } = this.props;
    return (
      <ul className="cartList">
        {cartList.map((cart, id) => {
          return (
            <li className="productList" key={cart.id}>
              <input type="checkbox" />
              <img alt="비타민" className="cartListImg" src={cart.productImg} />
              <div className="listDetail">
                <p className="listFont">{cart.productName}</p>
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
