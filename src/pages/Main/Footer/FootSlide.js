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
      '냉장고 구석,\n 다 먹지도 못한 영양제가 \n자리만 차지하고 있어요.',
    user: '도화동 사시는 김태영님',
  },
  {
    id: 1,
    icon: 'fas fa-tablets',
    alt: 'vitamin',
    description:
      '유통기한은 이미 다 지나버렸고,\n 다시 구매하려니 어떤 걸 사야 할지 고민돼요.',
    user: '효창동 사시는 설지우님',
  },
  {
    id: 2,
    icon: 'fas fa-cookie-bite',
    alt: 'vitamins',
    description: '세상 다양한 비타민들.\n 서로자기가 최고라고만 말하고 있어요.',
    user: '성남 사시는 최명준님',
  },
  {
    id: 3,
    icon: 'far fa-question-circle',
    alt: 'vitamins',
    description:
      '화장품처럼 비타민도 같이 섭취하면 \n 안좋은 성분이 있을까요? 궁금해요.',
    user: '선릉 사시는 위코드님',
  },
];
