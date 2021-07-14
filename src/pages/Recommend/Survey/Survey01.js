import React, { Component } from 'react';

import './Survey.scss';

export class Survey01 extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { surveyId, handleNextSubmmit, handlePrevSubmmit } = this.props;
    return (
      <div className="Survey survey01">
        <h2 className="surveyTitle">
          질문{this.props.surveyId - 1}
          <br />
          <strong>빌리가 고객님을 어떻게 부르면 좋을까요?</strong>
        </h2>
        <hr />
        <form className="surveyForm">
          <input
            onChange={this.handleInput}
            name="name"
            value={this.state.name}
            className="inputText"
            autoComplete="off"
            type="text hidden"
            placeholder="이름"
            required
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

export default Survey01;
