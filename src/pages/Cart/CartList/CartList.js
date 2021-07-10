import React from 'react';
import CartCount from '../CartCount/CartCount';
import './CartList.scss';

class CartList extends React.Component {
  handleClick = () => {
    this.setState(cart => {
      return {
        cartList: cart.cartList.filter(li => !li.id),
      };
    });
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
                    onClick={this.handleClick}
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
