import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends PureComponent {
  constructor() {
    super();
    this.state = {
      navActiveNumber: 0,
      isNavTransper: false,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnMount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      this.setState({ isNavTransper: true });
    } else if (window.pageYOffset === 0) {
      this.setState({ isNavTransper: false });
    }
  };

  navActiveHandler = index => {
    if (!parseInt(index)) {
      this.setState({ navActiveNumber: 0 });
    } else this.setState({ navActiveNumber: index + 1 });
  };

  render() {
    const { navActiveNumber, isNavTransper } = this.state;
    return (
      <nav className={`navbar ${isNavTransper ? 'transper' : ''}`}>
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
            {MENU_LIST.map((menu, index) => (
              <Link
                className={`navLink ${
                  navActiveNumber === index + 1 ? 'active' : 'disactive'
                }`}
                to={menu.link}
                key={index}
                onClick={() => this.navActiveHandler(index)}
              >
                {menu.name}
              </Link>
            ))}
          </li>
        </ul>
      </nav>
    );
  }
}

const MENU_LIST = [
  { name: '추천상품', link: '/recommend' },
  { name: '제품보기', link: '/product' },
  { name: '장바구니', link: '/cart' },
  { name: '로그인', link: '/login' },
];

export default Nav;
