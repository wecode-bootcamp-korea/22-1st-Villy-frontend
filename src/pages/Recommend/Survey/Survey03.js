import React, { Component } from 'react';

export class Survey03 extends Component {
  render() {
    return (
      <div className="Survey survey03">
        <h2 className="surveyTitle">
          질문{this.props.surveyId}
          <br />
          <strong>데이터받아오기/님은 몇살이신가요?</strong>
          <span>나이에 따라 필요한 영양성분이 달라질 수 있어요.</span>
        </h2>
        <hr />
        <form className="surveyForm">
          <input
            className="inputText"
            autoComplete="off"
            type="text"
            placeholder="나이"
            required
          />
          <div className="buttonBox">
            <button
              onClick={() =>
                this.props.handleSubmit(this.state, this.props.questionId - 1)
              }
            >
              이전
            </button>

            <button
              onClick={() =>
                this.props.handleSubmit(this.state, this.props.questionId)
              }
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
