import React from 'react';
import { Link } from 'react-router-dom';
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

  // 로그인 성공 여부
  requestLogin = () => {
    fetch('http://10.58.5.217:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.userId,
        password: this.state.userPw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.token) {
          alert('로그인 성공');
          localStorage.setItem('access_token', result.token);
        } else {
          alert('로그인 실패');
        }
      });
  };

  render() {
    const { userId, userPw } = this.state;
    return (
      <div className="Login">
        <div className="loginView">
          <div className="loginImg">
            <img
              alt="logo"
              className="loginLogo"
              src="http://localhost:3000/images/logo.png"
            />
          </div>
          <div className="loginForm">
            <input
              type="text"
              name="userId"
              className="loginInput"
              placeholder="이메일 또는 전화번호를 입력하세요."
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="userPw"
              className="loginInput"
              placeholder="비밀번호를 입력하세요."
              onChange={this.handleChange}
            />
            <div className="btn">
              <button
                type="button"
                className="loginButton"
                onClick={this.requestLogin}
                disabled={!(userId.includes('@') && userPw.length > 4)}
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
          </div>
          <div className="footerButton">
            <button type="button" className="kakao">
              KAKAO 로그인
            </button>
            <br />
            <button type="button" className="facebook">
              FACEBOOK
            </button>
            <br />
            <button type="button" className="naver">
              NAVER
            </button>
            <br />
            <button type="button" className="apple">
              APPLE
            </button>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
