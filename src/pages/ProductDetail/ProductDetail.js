import React, { Component } from 'react';
import './ProductDetial.scss';

export class ProductDetial extends Component {
  render() {
    return (
      <div className="ProductDetial">
        <ProductDetial>
          <div className="ProductDetialTextWrap">
            <h1>
              내 몸에 필요한
              <br />
              비타민 궁금하세요?
            </h1>
            <p>
              나만을 위한 맞춤비타민을 찾아보세요!
              <br /> 이미 <strong>587,064명</strong>이 추천받았습니다.
            </p>
            <button>지금 시작하기</button>
          </div>
        </ProductDetial>
        <div className="footTop">
          <h2>그동안 고민 많았죠?</h2>
        </div>
      </div>
    );
  }
}

export default ProductDetial;
