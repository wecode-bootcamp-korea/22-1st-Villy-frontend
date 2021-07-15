import React, { Component } from 'react';

import './Survey.scss';

export class Survey02 extends Component {
  render() {
    const { surveyId, handleNextSubmmit, handlePrevSubmmit } = this.props;
    return (
      <div className="Survey survey02">
        <h2 className="surveyTitle">
          질문{this.props.surveyId - 1}
          <br />
          <strong>{this.props.name}님의 성별을 알려주세요.</strong>
        </h2>
        <hr />

        <form className="surveyForm">
          <div className="checkbox">
            <input className="inputGender" name="gender" type="radio" />
            <label>여성</label>
          </div>
          <div className="checkbox">
            <input className="inputGender" name="gender" type="radio" />
            <label>남성</label>
          </div>
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

export default Survey02;
