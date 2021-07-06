import React, { Component } from 'react';
import FootSlide from './Footer/FootSlide';
import './Main.scss';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      slideList: [],
      setList: {},
    };
  }

  render() {
    return (
      <div className="Main">
        <main>
          <h1>
            내 몸에 필요한
            <br />
            비타민 궁금하세요?
          </h1>
          <p>
            나만을 위한 맞춤비타민을 찾아보세요! 이미 587,064명이
            추천받았습니다.
          </p>
          <button>지금 시작하기</button>
        </main>
        <FootSlide />
      </div>
    );
  }
}

export default Main;
