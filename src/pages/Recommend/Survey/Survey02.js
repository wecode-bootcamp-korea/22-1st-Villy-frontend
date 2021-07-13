import React, { Component } from 'react';

export class Survey02 extends Component {
  render() {
    return (
      <div className="Survey Survey02">
        <h2 class="surveyTitle">
          질문//2받아오기?
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
        </form>
      </div>
    );
  }
}

export default Survey02;
