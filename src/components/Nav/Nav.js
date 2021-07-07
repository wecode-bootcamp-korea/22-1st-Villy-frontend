import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navLogo">
          <Link to="/Login">
            <img alt="logo" src="http://localhost:3000/images/logo.png" />
          </Link>
        </div>
        <ul className="menu">
          <li>
            <Link to="">추천성분</Link>
          </li>
          <li>
            <Link to="/Product">제품보기</Link>
          </li>
          <li>
            <Link to="">고객후기</Link>
          </li>
          <li>
            <Link to="">장바구니</Link>
          </li>
          <li>
            <Link to="/Login">로그인</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
