import React, { Component } from 'react';
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi';
import './FootSlide.scss';

export class FootSlide extends Component {
  constructor() {
    super();
    this.state = {
      transValue: 0,
      slideCtrBtnValue: 0,
      slideList: [
        {
          id: 0,
          icon: 'http://localhost:3000/images/supplements.png',
          alt: 'supplements',
          description: 'villy 프로젝트 화이팅!!',
          user: '도화동 사시는 김태영님',
        },
        {
          id: 1,
          icon: 'http://localhost:3000/images/vitamin.png',
          alt: 'vitamin',
          description: '벡엔드 화이팅!!',
          user: '공덕동 사시는 설지우님',
        },
        {
          id: 2,
          icon: 'http://localhost:3000/images/vitamins.png',
          alt: 'vitamins',
          description: '프론트엔드 화이팅!!!',
          user: '안산 사시는 최명준님',
        },
      ],
    };
  }

  componentDidMount() {
    setInterval(this.autoSlide, 2500);
  }

  autoSlide = () => {
    const { transValue, slideList } = this.state;
    if (transValue === (slideList.length - 1) * -100) {
      this.setState({ transValue: 0, slideCtrBtnValue: 0 });
    } else {
      this.setState({
        transValue: this.state.transValue - 100,
        slideCtrBtnValue: this.state.slideCtrBtnValue + 1,
      });
    }
  };

  slideHandler = e => {
    const value = e.target.value * -100;
    clearInterval();
    this.setState({ transValue: value });
  };

  render() {
    const { slideList, transValue, slideCtrBtnValue } = this.state;
    const slideWidth = slideList.length;
    let slideStyle = {
      width: slideWidth * 100 + 'vw',
      transform: 'translate(' + transValue + 'vw)',
    };

    return (
      <div className="FootSlide">
        <ul className="slide" style={slideStyle}>
          {slideList.map(el => {
            return (
              <li key={el.id}>
                <div>
                  <img src={el.icon} alt={el.alt} />
                  <h2>{el.description}</h2>
                  <p> {el.user}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="FootSlideBt">
          <ul>
            {slideList.map(el => {
              return (
                <li key={el.id}>
                  <button
                    className="slideCtr"
                    onClick={this.slideHandler}
                    value={el.id}
                  >
                    {slideCtrBtnValue === el.id ? (
                      <BiRadioCircleMarked />
                    ) : (
                      <BiRadioCircle />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default FootSlide;
