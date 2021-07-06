import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navLogo">
          <a href="/Login">
            <img alt="logo" src="../images/logo.png"></img>
          </a>
        </div>
        <ul className="menu">
          <li>
            <a href="">추천성분</a>
          </li>
          <li>
            <a href="/Product">제품보기</a>
          </li>
          <li>
            <a href="">고객후기</a>
          </li>
          <li>
            <a href="">장바구니</a>
          </li>
          <li>
            <a href="/Login">로그인</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
