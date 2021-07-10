import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
  constructor() {
    super();
    this.click = React.createRef();
  }

  handle = event => {
    console.log(event);
    return 'a';
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navLogo">
          <Link to="/">
            <img alt="logo" className="logoImg" src="/images/logo.png" />
          </Link>
        </div>
        <ul className="navMenu">
          <li className="navList">
            {MENU_LIST.map((link, index) => {
              return (
                <Link
                  className={`navLink ${this.handle}`}
                  to={link.link}
                  ref={this.click}
                  key={index}
                  onClick={() => this.handle(index)}
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
  { name: '추천상품', link: '/' },
  { name: '제품보기', link: '/product' },
  { name: '고객후기', link: '/' },
  { name: '장바구니', link: '/cart' },
  { name: '로그인', link: '/login' },
];

export default Nav;
