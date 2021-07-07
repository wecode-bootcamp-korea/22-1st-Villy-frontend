import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navLogo">
          <Link to="/Login">
            <img
              alt="logo"
              className="logo_img"
              src="http://localhost:3000/images/logo.png"
            />
          </Link>
        </div>
        <ul className="nav_menu">
          <li className="nav_list">
            <Link className="nav_link" to="">
              추천성분
            </Link>
            <Link className="nav_link" to="/Product">
              제품보기
            </Link>
            <Link className="nav_link" to="">
              고객후기
            </Link>
            <Link className="nav_link" to="">
              장바구니
            </Link>
            <Link className="nav_link" to="/Login">
              로그인
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
