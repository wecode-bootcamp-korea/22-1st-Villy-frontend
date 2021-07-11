import React from 'react';
import './CartListNull.scss';

class CartListNull extends React.Component {
  render() {
    return (
      <div className="CartListNull">
        <img
          alt="상품 리스트 없음"
          className="nullImg"
          src="./images/ListNull.png"
        />
        <h1 className="nullTitle">장바구니에 추가된 제품이 없습니다.</h1>
        <p className="nullContent">
          몇가지 건강설문을 통해 <br />
          나만을 위한 영양성분을 찾아보세요.
        </p>

        <button type="submit" className="nullBtn">
          나만의 영양성분 찾기
        </button>
      </div>
    );
  }
}

export default CartListNull;
