import React, { Component } from 'react';
import './ProductDetail.scss';

export class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/ProductData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          productData: data,
        });
      });
  }
  render() {
    console.log(`this.state`, this.state);
    return (
      <div className="ProductDetail">
        <main>
          <div className="headTextWrap">
            <h1>
              내 몸에 필요한
              <br />
              {/* 필수 영양소{porouctData[0].name} */}
            </h1>
            <p>
              나만을 위한 맞춤비타민을 찾아보세요!
              <br /> 이미 <strong>587,064명</strong>이 추천받았습니다.
            </p>
            <button>지금 시작하기</button>
          </div>
        </main>
        <section className="comment">
          <h2>그동안 고민 많았죠?</h2>
        </section>
      </div>
    );
  }
}

export default ProductDetail;
