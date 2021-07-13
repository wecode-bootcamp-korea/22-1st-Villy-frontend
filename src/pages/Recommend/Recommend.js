import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { SurveyWelcome } from './Survey/SurveyWelcome';
import { Survey01 } from './Survey/Survey01';
import { Survey02 } from './Survey/Survey02';
import { Survey03 } from './Survey/Survey03';
import { Survey04 } from './Survey/Survey04';

import './Recommend.scss';

export class Recommend extends Component {
  render() {
    return (
      <section className="Recommend">
        <h2 className="sr-only">recommend</h2>
        <div className="surveyModal">
          <div className="surveyBox">
            <header className="surveyHeader">
              <Link to="/">
                <button class="closeButton">
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
            {/* 모드에 따라 아래 컴포넌트 바뀌기 */}
            <SurveyWelcome />
            <Survey01 />
            <Survey02 />
            <Survey03 />
            <Survey04 />
          </div>
        </div>
      </section>
    );
  }
}

export default Recommend;
