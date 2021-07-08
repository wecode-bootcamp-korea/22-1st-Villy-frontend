import React, { Component } from 'react';
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi';
import './FootSlide.scss';

export class FootSlide extends Component {
  constructor() {
    super();
    this.slideIntervalId = React.createRef();
    this.state = {
      slideCardNumber: 0,
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
    this.slideIntervalId.current = setInterval(this.moveNextSlide, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.slideIntervalId.current);
  }

  moveNextSlide = () => {
    const { slideCardNumber, slideList } = this.state;
    const nextSlideCardNumber =
      slideCardNumber > slideList.length - 2 ? 0 : slideCardNumber + 1;
    this.setState({ slideCardNumber: nextSlideCardNumber });
  };

  slideHandler = e => {
    this.setState({ slideCardNumber: Number(e.currentTarget.value) });
  };

  render() {
    const { slideList, slideCardNumber } = this.state;
    return (
      <div className="FootSlide">
        <ul
          className="slide"
          style={{ transform: `translateX(${-100 * slideCardNumber}vw)` }}
        >
          {slideList.map(({ id, icon, alt, description, user }) => (
            <li className="slideList" key={id} value={id}>
              <article className="slideContent">
                <img className="slideIcon" src={icon} alt={alt} />
                <h2>{description}</h2>
                <p className="recomendUser"> {user}</p>
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
                  {slideCardNumber === button.id ? (
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
