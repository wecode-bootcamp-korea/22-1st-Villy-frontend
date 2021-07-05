import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav class="navbar">
        <div class="navLogo">
          <img alt="logo" src="../images/logo.png"></img>
        </div>
        <ul class="menu">
          <li class>
            <a href="">추천성분</a>
          </li>
          <li class>
            <a href="">제품보기</a>
          </li>
          <li class>
            <a href="">고객후기</a>
          </li>
          <li class>
            <a href="">장바구니</a>
          </li>
          <li class>
            <a href="">로그인</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
