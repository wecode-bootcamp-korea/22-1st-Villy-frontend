import React, { Component } from 'react';

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
    console.log(this.state.name);
    return (
      <div className="Survey survey01">
        <h2 className="surveyTitle">
          질문{this.props.surveyId}
          <br />
          <strong>빌리가 고객님을 어떻게 부르면 좋을까요?</strong>
        </h2>
        <hr />
        <form className="surveyForm">
          <input
            onChange={this.handleInput}
            name="name"
            className="inputText"
            autoComplete="off"
            type="text"
            placeholder="이름"
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

export default Survey01;
