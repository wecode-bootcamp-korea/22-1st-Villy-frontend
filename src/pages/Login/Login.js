import React from 'react';
import { Link } from 'react-router-dom';
import { POST_SIGNIN_API } from '../../../src/config.js';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      userPw: '',
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  requestLogin = () => {
    fetch(`${POST_SIGNIN_API}`, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.userId,
        password: this.state.userPw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.access_token) {
          alert('로그인 성공');
          localStorage.setItem('access_token', res.access_token);
          this.goToMain();
        } else {
          alert('로그인 실패');
        }
      });
  };

  goToMain = () => this.props.history.push('/');

  render() {
    const { userId, userPw } = this.state;
    return (
      <div className="Login">
        <div className="loginView">
          <div className="logoWrapper">
            <img alt="logo" className="loginLogo" src="/images/logo.png" />
          </div>
          <form className="loginForm">
            <input
              type="text"
              name="userId"
              className="loginInput"
              placeholder="이메일 또는 전화번호를 입력하세요."
              onChange={this.handleChange}
              autoComplete="off"
            />
            <input
              type="password"
              name="userPw"
              className="loginInput"
              placeholder="비밀번호를 입력하세요."
              onChange={this.handleChange}
              autoComplete="off"
            />
            <div className="loginButton">
              <button
                type="button"
                className="loginBtn"
                onClick={this.requestLogin}
                disabled={!(userId.includes('@') && userPw.length > 6)}
              >
                로그인
              </button>
            </div>
            <p className="loginText">
              비밀번호 찾기 ㅣ
              <Link className="loginFormLink" to="/signup">
                회원가입
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
