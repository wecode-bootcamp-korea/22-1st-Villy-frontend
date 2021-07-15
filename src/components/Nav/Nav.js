import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navLogo">
          <Link to="/login">
            <img alt="logo" className="logoImg" src="/images/logo.png" />
          </Link>
        </div>
        <ul className="navMenu">
          <li className="navList">
            {MENU_LIST.map((link, name) => {
              return (
                <Link className="navLink" to={link.link} key={name}>
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
  { name: '추천상품', link: '/recommend' },
  { name: '제품보기', link: '/product' },
  { name: '고객후기', link: '/' },
  { name: '장바구니', link: '/cart' },
  { name: '로그인', link: '/login' },
];

export default Nav;
