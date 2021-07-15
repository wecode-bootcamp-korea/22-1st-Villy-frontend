import React, { Component } from 'react';

import './Survey.scss';

export class Survey03 extends Component {
  render() {
    const { surveyId, handleNextSubmmit, handlePrevSubmmit } = this.props;
    return (
      <div className="Survey survey03">
        <h2 className="surveyTitle">
          질문{this.props.surveyId - 1}
          <br />
          <strong>{this.props.name}님은 몇 살이신가요?</strong>
          <span className="subtitle">
            나이에 따라 필요한 영양성분이 달라질 수 있어요.
          </span>
        </h2>
        <hr />
        <form className="surveyForm">
          <input
            className="inputText"
            autoComplete="off"
            type="text hidden"
            placeholder="나이"
          />
          <div className="buttonBox">
            <button
              className="previousButton"
              onClick={() => handlePrevSubmmit(surveyId)}
            >
              이전
            </button>
            <button
              className="nextButton"
              onClick={() => handleNextSubmmit(surveyId)}
            >
              다음
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Survey03;
