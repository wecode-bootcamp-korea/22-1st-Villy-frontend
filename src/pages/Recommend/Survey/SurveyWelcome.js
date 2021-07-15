import React, { Component } from 'react';

import './SurveyWelcome.scss';

export class SurveyWelcome extends Component {
  render() {
    const { surveyId, handleNextSubmmit } = this.props;
    return (
      <div className="SuverveyWelcome">
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
          <button
            className="surveyButton"
            onClick={() => handleNextSubmmit(surveyId)}
          >
            시작하기
          </button>

          <p className="caution">
            ※ 질병의 진단 및 치료는 전문적인 의료기관을 이용하세요.
          </p>
        </footer>
      </div>
    );
  }
}

export default SurveyWelcome;
