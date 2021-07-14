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

  handleNextSubmmit = surveyId => {
    this.setState({
      answer: this.state.answer.concat({ id: surveyId }),
    });
    this.handleNextButton(surveyId);
    console.log('hallo');
  };

  handlePrevSubmmit = surveyId => {
    this.setState({
      answer: this.state.answer.pop({ id: surveyId }),
    });
    this.handlePrevButton(surveyId);
  };

  handlPrevButton = id => {
    this.setState({ surveyId: id - 1 });
  };

  handleNextButton = id => {
    this.setState({ surveyId: id + 1 });
  };

  render() {
    const survey = {
      1: (
        <SurveyWelcome
          surveyId={this.state.surveyId}
          handleNextSubmmit={this.handleNextSubmmit}
        />
      ),
      2: (
        <Survey01
          surveyId={this.state.surveyId}
          handleNextSubmmit={this.handleNextSubmmit}
          handlePrevSubmmit={this.handlePrevSubmmit}
        />
      ),
      3: (
        <Survey02
          surveyId={this.state.surveyId}
          handleNextSubmmit={this.handleNextSubmmit}
          handlePrevSubmmit={this.handlePrevSubmmit}
        />
      ),
      4: (
        <Survey03
          surveyId={this.state.surveyId}
          handleNextSubmmit={this.handleNextSubmmit}
          handlePrevSubmmit={this.handlePrevSubmmit}
        />
      ),
      5: (
        <Survey04
          surveyId={this.state.surveyId}
          handlePrevSubmmit={this.handlePrevSubmmit}
          handleNextSubmmit={this.handleNextSubmmit}
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

            <div className="SurveyBox">{survey[this.state.surveyId]}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Recommend;
