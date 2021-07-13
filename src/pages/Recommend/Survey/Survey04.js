import React, { Component } from 'react';

export class Survey04 extends Component {
  render() {
    return (
      <div className="Survey Survey04">
        <h2 class="surveyTitle">
          질문//4받아오기?
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
        </form>
      </div>
    );
  }
}

export default Survey04;
