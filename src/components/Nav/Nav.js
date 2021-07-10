import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      navActiveNumber: '',
    };
  }

  navActiveHandler = clickedNavNumber => {
    console.log(`clickedNavNumber`, clickedNavNumber);
    if (!clickedNavNumber) {
      this.setState({ navActiveNumber: '' });
    }
    this.setState({ navActiveNumber: clickedNavNumber });
  };

  render() {
    const { navActiveNumber } = this.state;
    return (
      <nav className="navbar">
        <div className="navLogo">
          <Link to="/">
            <img
              alt="logo"
              className="logoImg"
              src="/images/logo.png"
              onClick={this.navActiveHandler}
            />
          </Link>
        </div>
        <ul className="navMenu">
          <li className="navList">
            {MENU_LIST.map((link, index) => {
              return (
                <Link
                  className={`navLink ${
                    navActiveNumber === index ? 'active' : 'disactive'
                  }`}
                  to={link.link}
                  key={index}
                  name={index}
                  onClick={() => this.navActiveHandler(index)}
                >
                  {link.name}
                </Link>
              );
            })}
          </li>
        </ul>
      </nav>
    );
  }
}

const MENU_LIST = [
  { id: 8, name: '추천상품', link: '/' },
  { id: 9, name: '제품보기', link: '/product' },
  { id: 3, name: '고객후기', link: '/' },
  { id: 4, name: '장바구니', link: '/cart' },
  { id: 5, name: '로그인', link: '/login' },
];

export default Nav;
