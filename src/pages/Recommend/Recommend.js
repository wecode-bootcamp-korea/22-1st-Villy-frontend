import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { GET_PRODUCTS_API } from '../../config';

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
      filterState: {
        bone: false,
        hair: false,
        growth: false,
        skin: false,
      },
    };
  }

  handleNextSubmmit = surveyId => {
    const newAnswer = [...this.state.answer, { id: surveyId }];
    this.setState({
      answer: newAnswer,
    });
    this.handleNextButton(surveyId);
  };

  handlePrevSubmmit = surveyId => {
    const previousAnswer = this.state.answer.filter(previous => {
      return previous.surveyId !== surveyId;
    });
    this.setState({
      answer: previousAnswer,
    });
    this.handlPrevButton(surveyId);
  };

  handlPrevButton = id => {
    this.setState({ surveyId: id - 1 });
  };

  handleNextButton = id => {
    this.setState({ surveyId: id + 1 });
  };

  // 카테고리 조건
  makeCondition = () => {
    const filterMatch = {
      bone: 1,
      hair: 2,
      growth: 3,
      skin: 4,
    };

    const filtered = Object.entries(this.state.filterState).reduce(
      (acc, [key, value]) => {
        if (!acc && value) {
          return acc + `efficacy=${filterMatch[key]}`;
        }

        if (value) {
          return acc + `&efficacy=${filterMatch[key]}`;
        }
        return acc;
      },
      ''
    );

    // fetch(`${GET_PRODUCTS_API}?${filtered}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       productCard: data.message,
    //     });
    //   });
    console.log(`filtered>>>>>`, `${GET_PRODUCTS_API}?${filtered}`);
  };

  // fetchFilter = () => {
  //   fetch(`${GET_PRODUCTS_API}?${filtered}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         productCard: data.message,
  //       });
  //     });
  // };

  handleCheckBox = event => {
    const checkBoxName = event.target.name;
    const checkBoxNameState = !this.state.filterState[checkBoxName];
    this.setState(
      {
        filterState: {
          ...this.state.filterState,
          [checkBoxName]: checkBoxNameState,
        },
      },
      this.makeCondition
    );
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
          handleCheckBox={this.handleCheckBox}
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
