import React, { Component } from 'react';
import './FootSlide.scss';

export class FootSlide extends Component {
  constructor() {
    super();
    this.state = {
      transValue: 0,
      slideList: [
        {
          id: 0,
          title: 'test1',
          description: 'testeteset',
        },
        {
          id: 1,
          title: 'test2',
          description: 'testeteset222',
        },
        {
          id: 2,
          title: 'test3',
          description: 'testeteset333',
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
      this.setState({ transValue: 0 });
    } else {
      this.setState({
        transValue: this.state.transValue - 100,
      });
    }
  };

  slideHandler = e => {
    const value = e.target.value * -100;
    clearInterval();
    this.setState({ transValue: value });
  };

  render() {
    const { slideList, transValue } = this.state;
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
                <p>{el.title}</p>
                <div>{el.description}</div>
              </li>
            );
          })}
        </ul>
        <div className="FootSlideBt">
          <ul>
            {slideList.map(el => {
              return (
                <li key={el.id}>
                  <button onClick={this.slideHandler} value={el.id}>
                    O
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
