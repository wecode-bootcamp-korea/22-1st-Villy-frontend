import React, { Component } from 'react';

export class Survey01 extends Component {
  render() {
    return (
      <div className="Survey urvey01">
        <h2 class="surveyTitle">
          질문//1받아오기?
          <br />
          <strong>빌리가 고객님을 어떻게 부르면 좋을까요?</strong>
        </h2>
        <hr />
        <form className="surveyForm">
          <input
            className="inputText"
            autoComplete="off"
            type="text"
            placeholder="이름"
          />
        </form>
      </div>
    );
  }
}

export default Survey01;
