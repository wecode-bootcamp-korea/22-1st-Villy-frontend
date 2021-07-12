import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Recommend.scss';

export class Recommend extends Component {
  render() {
    return (
      <section className="Recommend">
        <h2 className="sr-only">recommend</h2>
        <div className="surveyModal">
          <div className="surveyBox">
            <header className="surveyHeader">
              <Link to="/">
                <button class="closeButton">
                  <i class="fas fa-times" />
                </button>
              </Link>
              <div className="villyLogo">Villy</div>
              <h1>
                빌리!
                <br />
                <strong>내 건강을 알려줘!</strong>
              </h1>
            </header>

            <section className="surveyBody">
              <h2 className="sr-only">survey intro</h2>
              <p className="surveyCotent">
                몇 가지 질문에 답하고
                <br />
                나에게 필요한 영양성분을 알아보세요.
                <span className="surveyTime">약 3분정도 소요됩니다.</span>
              </p>
            </section>
            <footer className="surveyFooter">
              <button className="surveyButton">시작하기</button>

              <p className="caution">
                ※ 질병의 진단 및 치료는 전문적인 의료기관을 이용하세요.
              </p>
            </footer>
          </div>
        </div>
      </section>
    );
  }
}

export default Recommend;
