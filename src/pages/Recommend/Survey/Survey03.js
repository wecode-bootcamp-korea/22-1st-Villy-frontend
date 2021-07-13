import React, { Component } from 'react';

export class Survey03 extends Component {
  render() {
    return (
      <div className="Survey Survey03">
        <h2 class="surveyTitle">
          질문//3받아오기?
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
          />
        </form>
      </div>
    );
  }
}

export default Survey03;
