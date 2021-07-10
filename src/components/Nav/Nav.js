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

  handle = clickedNavNumber =>
    this.setState({ navActiveNumber: clickedNavNumber });

  render() {
    console.log(`this.state.navActiveNumber`, this.state.navActiveNumber);
    const { navActiveNumber } = this.state;
    return (
      <nav className="navbar">
        <div className="navLogo">
          <Link to="/">
            <img alt="logo" className="logoImg" src="/images/logo.png" />
          </Link>
        </div>
        <ul className="navMenu">
          <li className="navList">
            {MENU_LIST.map((link, id) => {
              return (
                <Link
                  className={navActiveNumber === id ? 'a' : 'b'}
                  to={link.link}
                  key={id}
                  name={id}
                  onClick={() => this.handle(id)}
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
  { id: 1, name: '추천상품', link: '/' },
  { id: 2, name: '제품보기', link: '/product' },
  { id: 3, name: '고객후기', link: '/' },
  { id: 4, name: '장바구니', link: '/cart' },
  { id: 5, name: '로그인', link: '/login' },
];

export default Nav;
