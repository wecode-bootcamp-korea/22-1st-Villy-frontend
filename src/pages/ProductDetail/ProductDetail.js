import React, { Component } from 'react';
import { FaCreativeCommons, FaCreativeCommonsPdAlt } from 'react-icons/fa';
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
            <header className="headTextWrap">
              <h1>
                <span>{productData[0].efficacy}</span>
                <br />
                {productData[0].name}
              </h1>
              <ul className="propertyIcons">
                {/* 아이콘 map */}
                <li></li>
              </ul>
              <p>
                {/* 세부 설명 */}
                <strong>{/*가격*/}</strong>
              </p>
              <ul className="certificationIcons">
                <li className="certificationIconList">
                  <FaCreativeCommons className="certificationIcon" />
                </li>
                <li className="certificationIconList">
                  <FaCreativeCommonsPdAlt className="certificationIcon" />
                </li>
              </ul>
              <button className="cartButton">장바구니 담기</button>
            </header>
            <img className="productImg">{/* 제품 이미지 */}</img>
          </main>
          <section className="comment">
            <div className="question">
              <div className="answer"></div>
            </div>
          </section>
        </div>
      );
    }
  }
}
export default ProductDetail;
