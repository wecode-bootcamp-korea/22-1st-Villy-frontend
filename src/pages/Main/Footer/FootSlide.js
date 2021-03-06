import React, { Component } from 'react';
import { BiRadioCircleMarked, BiRadioCircle } from 'react-icons/bi';
import './FootSlide.scss';
export class FootSlide extends Component {
  constructor() {
    super();
    this.slideIntervalId = React.createRef();
    this.state = {
      slideCardNumber: 0,
    };
  }

  componentDidMount() {
    this.slideIntervalId.current = setInterval(this.moveNextSlide, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.slideIntervalId.current);
  }

  moveNextSlide = () => {
    const { slideCardNumber } = this.state;
    const nextSlideCardNumber =
      slideCardNumber > SLIDE_LIST.length - 2 ? 0 : slideCardNumber + 1;
    this.setState({ slideCardNumber: nextSlideCardNumber });
  };

  slideHandler = e => {
    this.setState({ slideCardNumber: Number(e.currentTarget.value) });
  };

  render() {
    const { slideCardNumber } = this.state;
    return (
      <div className="FootSlide">
        <ul
          className="slide"
          style={{ transform: `translateX(${-100 * slideCardNumber}vw)` }}
        >
          {SLIDE_LIST.map(({ id, icon, description, user }) => (
            <li className="slideList" key={id} value={id}>
              <article className="slideContent">
                <i className={icon}></i>
                <div className="slideTextWrap">
                  {description.split('\n').map((line, index) => (
                    <p key={index} className="slideText">
                      {line}
                      <br />
                    </p>
                  ))}
                </div>
                <p className="recomendUser"> {user}</p>
              </article>
            </li>
          ))}
        </ul>
        <div className="slideButtonWrap">
          <ul className="slideButtons">
            {SLIDE_LIST.map(button => (
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
const SLIDE_LIST = [
  {
    id: 0,
    icon: 'fas fa-pills',
    alt: 'supplements',
    description:
      '????????? ??????,\n ??? ????????? ?????? ???????????? \n????????? ???????????? ?????????.',
    user: '????????? ????????? ????????????',
  },
  {
    id: 1,
    icon: 'fas fa-tablets',
    alt: 'vitamin',
    description:
      '??????????????? ?????? ??? ???????????????,\n ?????? ??????????????? ?????? ??? ?????? ?????? ????????????.',
    user: '????????? ????????? ????????????',
  },
  {
    id: 2,
    icon: 'fas fa-cookie-bite',
    alt: 'vitamins',
    description: '?????? ????????? ????????????.\n ??????????????? ??????????????? ????????? ?????????.',
    user: '?????? ????????? ????????????',
  },
  {
    id: 3,
    icon: 'far fa-question-circle',
    alt: 'vitamins',
    description:
      '??????????????? ???????????? ?????? ???????????? \n ????????? ????????? ????????????? ????????????.',
    user: '?????? ????????? ????????????',
  },
];
