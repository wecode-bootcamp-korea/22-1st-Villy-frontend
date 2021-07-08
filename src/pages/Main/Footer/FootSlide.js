import React, { Component } from 'react';
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi';
import './FootSlide.scss';

export class FootSlide extends Component {
  constructor() {
    super();
    this.state = {
      slideNumber: 0,
      slideList: [],
    };
  }

  componentDidMount() {
    this.startSlide();
    fetch('http://localhost:3000/data/MainSlide.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          slideList: data,
        });
      });
  }

  componentWillUnmount() {
    clearInterval(this.startSlide);
  }

  startSlide = () => setInterval(this.autoSlide, 2500);
  endSlide = () => clearInterval(this.startSlide);

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
