import React, { Component } from 'react';
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi';
import './FootSlide.scss';

export class FootSlide extends Component {
  constructor() {
    super();
    this.state = {
      slideNumber: 0,
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

  componentWillUnmount() {
    clearInterval();
  }

  autoSlide = () => {
    const { slideNumber, slideList } = this.state;
    if (slideNumber >= slideList.length - 1) {
      this.setState({ slideNumber: 0 });
    } else {
      this.setState({ slideNumber: this.state.slideNumber + 1 });
    }
  };

  slideHandler = e => {
    const value = e.currentTarget.value;
    this.setState({ slideNumber: Number(value) });
  };

  render() {
    const { slideList, slideNumber } = this.state;
    return (
      <div className="FootSlide">
        <button onClick={() => clearInterval()}>asdf</button>
        <ul
          className="slide"
          style={{ transform: `translateX(${-100 * slideNumber}vw)` }}
        >
          {slideList.map(slide => (
            <li className="slideList" key={slide.id} value={slide.id}>
              <article className="slideContent">
                <img src={slide.icon} alt={slide.alt} />
                <h2>{slide.description}</h2>
                <p> {slide.user}</p>
              </article>
            </li>
          ))}
        </ul>
        <div className="slideButtonWrap">
          <ul className="slideButtons">
            {slideList.map(button => (
              <li className="slideButtonList" key={button.id}>
                <button
                  className="slideControlButton"
                  onClick={this.slideHandler}
                  value={button.id}
                >
                  {slideNumber === button.id ? (
                    <BiRadioCircleMarked />
                  ) : (
                    <BiRadioCircle />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default FootSlide;
