import React, { Component } from 'react';

export class Survey04 extends Component {
  render() {
    return (
      <div className="Survey survey04">
        <h2 className="surveyTitle">
          질문{this.props.surveyId}
          <br />
          <strong>ㅇㅇ님이 불편하시거나 걱정되는 3가지를 선택하세요.</strong>
          <span>우선적으로 관리가 필요한 것을 선택하세요.</span>
        </h2>
        <hr />
        <form className="surveyForm">
          <div>
            <input type="checkbox" />
            <label>뼈</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>모발</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>성장</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>피부</label>
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

export default Survey04;
