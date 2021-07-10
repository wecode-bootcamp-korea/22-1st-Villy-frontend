import React from 'react';
import './CartCount.scss';

class CartCount extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 1,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState({
      value: this.state.value + 1,
    });
  }

  handleDecrement() {
    this.setState({
      value: this.state.value - 1,
    });
  }

  render() {
    return (
      <>
        <div className="btnDetail">
          <button
            type="button"
            className="countButton"
            onClick={this.handleDecrement}
          >
            -
          </button>
          <span className="countNum">{this.state.value}</span>
          <button
            type="button"
            className="countButton"
            onClick={this.handleIncrement}
          >
            +
          </button>
        </div>
      </>
    );
  }
}

export default CartCount;
