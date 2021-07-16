import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { GET_PRODUCTS_API } from '../../../config';

import './Survey.scss';

export class Survey04 extends Component {
  render() {
    const { surveyId, handlePrevSubmmit, handleCheckBox } = this.props;
    return (
      <div className="Survey survey04">
        <h2 className="surveyTitle">
          질문{this.props.surveyId - 1}
          <br />
          <strong>
            {this.props.name}님이 불편하시거나 걱정되는 것을 모두 선택하세요.
          </strong>
          <span span className="subtitle">
            우선적으로 관리가 필요한 것을 선택하세요.
          </span>
        </h2>
        <hr />
        <div className="surveyForm">
          <div className="checkbox">
            <input
              id="1"
              name="bone"
              className="inputGender"
              type="checkbox"
              onChange={handleCheckBox}
            />
            <label>뼈</label>
          </div>
          <div className="checkbox">
            <input
              id="2"
              name="hair"
              className="inputGender"
              type="checkbox"
              onChange={handleCheckBox}
            />
            <label>모발</label>
          </div>
          <div className="checkbox">
            <input
              id="3"
              name="growth"
              className="inputGender"
              type="checkbox"
              onChange={handleCheckBox}
            />
            <label>성장</label>
          </div>
          <div className="checkbox">
            <input
              id="4"
              name="skin"
              className="inputGender"
              type="checkbox"
              onChange={handleCheckBox}
            />
            <label>피부</label>
          </div>
          <div className="buttonBox">
            <button
              className="previousButton"
              onClick={() => handlePrevSubmmit(surveyId)}
            >
              이전
            </button>
            <button
              onClick={() =>
                this.props.history.push(`product?${this.props.makeCondition()}`)
              }
              className="nextButton"
            >
              제출
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Survey04);
