import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import FootSlide from './Footer/FootSlide';
import './Main.scss';

export class Main extends Component {
  render() {
    return (
      <div className="Main">
        <main className="mainPage">
          <header className="mainTextWrap">
            <h1>
              내 몸에 필요한
              <br />
              비타민 궁금하세요?
            </h1>
            <p className="promotionDescription">
              나만을 위한 맞춤비타민을 찾아보세요!
              <br /> 이미 <strong className="recomendPeple">587,064명</strong>이
              추천받았습니다.
            </p>
            <Link to="/recommend">
              <button className="recommendButton">지금 시작하기</button>
            </Link>
          </header>
        </main>
        <section className="footSlideTop">
          <h2>그동안 고민 많았죠?</h2>
        </section>
        <FootSlide />
      </div>
    );
  }
}

export default Main;
