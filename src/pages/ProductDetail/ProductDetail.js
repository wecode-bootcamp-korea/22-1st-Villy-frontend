import React, { Component } from 'react';
import './ProductDetail.scss';

export class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      backgroundColor: {
        1: '#E9F9FE',
        2: '#E0B5BA',
        3: '#EFE9D9',
        4: '#B1D9F1',
        5: '#EAE9E9',
        6: '#AEE19E',
        7: '#FFF0A6',
        8: '#CBC5E8',
        9: '#FAD4BF',
      },
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
    if (!this.state.productData[0]) {
      return <div>..Loading</div>;
    } else {
      const { productData, backgroundColor } = this.state;
      return (
        <div className="ProductDetail">
          <main style={{ backgroundColor: backgroundColor[productData[0].id] }}>
            <div className="headTextWrap">
              <h1>
                {productData[0].efficacy}
                <br />
                {productData[0].name}
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
}
export default ProductDetail;
