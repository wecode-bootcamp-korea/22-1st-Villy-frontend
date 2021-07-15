import React, { Component } from 'react';

import { GET_PRODUCTS_API } from '../../../config';

import './Survey.scss';

export class Survey04 extends Component {
  constructor() {
    super();
    this.state = {
      filterState: {
        bone: false,
        hair: false,
        growth: false,
        skin: false,
      },
    };
  }

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

    fetch(`${GET_PRODUCTS_API}?${filtered}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productCard: data.message,
        });
      });
  };

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
      () => {
        this.makeCondition();
      }
    );
  };

  render() {
    const { surveyId, handlePrevSubmmit } = this.props;
    return (
      <div className="Survey survey04">
        <h2 className="surveyTitle">
          질문{this.props.surveyId - 1}
          <br />
          <strong>
            데이터받아오기//님이 불편하시거나 걱정되는 것을 모두 선택하세요.
          </strong>
          <span span className="subtitle">
            우선적으로 관리가 필요한 것을 선택하세요.
          </span>
        </h2>
        <hr />
        <form className="surveyForm">
          <div className="checkbox">
            <input id="1" name="bone" className="inputGender" type="checkbox" />
            <label>뼈</label>
          </div>
          <div className="checkbox">
            <input id="2" name="hair" className="inputGender" type="checkbox" />
            <label>모발</label>
          </div>
          <div className="checkbox">
            <input
              id="3"
              name="growth"
              className="inputGender"
              type="checkbox"
            />
            <label>성장</label>
          </div>
          <div className="checkbox">
            <input id="4" name="skin" className="inputGender" type="checkbox" />
            <label>피부</label>
          </div>
          <div className="buttonBox">
            <button
              className="previousButton"
              onClick={() => handlePrevSubmmit(surveyId)}
            >
              이전
            </button>
            <button className="nextButton" onClick={this.handleCheckBox}>
              제출
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Survey04;
