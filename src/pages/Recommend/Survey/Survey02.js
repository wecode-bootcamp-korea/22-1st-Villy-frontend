import React, { Component } from 'react';

export class Survey02 extends Component {
  render() {
    return (
      <div className="Survey survey02">
        <h2 className="surveyTitle">
          질문{this.props.surveyId}
          <br />
          <strong>데이터받아오기/님의 성별을 알려주세요.</strong>
        </h2>
        <hr />

        <form className="surveyForm">
          <div>
            <input type="checkbox" />
            <label>여성</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>남성</label>
          </div>
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

export default Survey02;
