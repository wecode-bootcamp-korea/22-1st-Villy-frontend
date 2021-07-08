import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      menuList: [
        { name: '추천상품', link: '/login' },
        { name: '제품보기', link: '/product' },
        { name: '고객후기', link: '/login' },
        { name: '장바구니', link: '/cart' },
        { name: '로그인', link: '/login' },
      ],
    };
  }

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
            {this.state.menuList.map((menu, i) => {
              return (
                <Link className="navLink" to={menu.link} key={i}>
                  {menu.name}
                </Link>
              );
            })}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
