import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navLogo">
          <Link to="/login">
            <img
              alt="logo"
              className="logoImg"
              src="http://localhost:3000/images/logo.png"
            />
          </Link>
        </div>
        <ul className="navMenu">
          <li className="navList">
            <Link className="navLink" to="">
              추천성분
            </Link>
            <Link className="navLink" to="/product">
              제품보기
            </Link>
            <Link className="navLink" to="">
              고객후기
            </Link>
            <Link className="navLink" to="">
              장바구니
            </Link>
            <Link className="navLink" to="/login">
              로그인
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
