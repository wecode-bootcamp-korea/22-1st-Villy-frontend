import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { SurveyWelcome } from './Survey/SurveyWelcome';
import { Survey01 } from './Survey/Survey01';
import { Survey02 } from './Survey/Survey02';
import { Survey03 } from './Survey/Survey03';
import { Survey04 } from './Survey/Survey04';

import './Recommend.scss';

export class Recommend extends Component {
  constructor() {
    super();
    this.state = {
      surveyId: 1,
      answer: [],
    };
  }

  handleSubmmit = surveyId => {
    this.setState({ answer: this.state.answer.concat({ id: surveyId }) });
    this.handleNextButton(surveyId);
  };

  handleNextButton = id => {
    this.setState({ survey: id + 1 });
  };

  render() {
    const survey = {
      1: (
        <SurveyWelcome
          surveyId={this.state.surveyId}
          handleSubmmit={this.handleSubmmit}
        />
      ),
      2: (
        <Survey01
          surveyId={this.state.surveyId}
          handleSubmmit={this.handleSubmmit}
        />
      ),
      3: (
        <Survey02
          surveyId={this.state.surveyId}
          handleSubmmit={this.handleSubmmit}
        />
      ),
      4: (
        <Survey03
          surveyId={this.state.surveyId}
          handleSubmmit={this.handleSubmmit}
        />
      ),
      5: (
        <Survey04
          surveyId={this.state.surveyId}
          handleSubmmit={this.handleSubmmit}
        />
      ),
    };

    return (
      <section className="Recommend">
        <h2 className="sr-only">recommend</h2>
        <div className="surveyModal">
          <div className="surveyBox">
            <header className="surveyHeader">
              <Link to="/">
                <button className="closeButton">
                  <i class="fas fa-times" />
                </button>
              </Link>
              <div className="villyLogo">Villy</div>
              <h1>
                빌리!
                <br />
                <strong>내 건강을 알려줘!</strong>
              </h1>
            </header>

            {/* 버튼  따라 아래 컴포넌트 바뀌기 */}
            <div className="SurveyBox">{survey[this.state.surveyId]}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Recommend;
