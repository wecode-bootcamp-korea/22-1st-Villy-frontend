import React from 'react';
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
  loginFetch = () => {
    fetch('http://10.58.5.217:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.userId,
        password: this.state.userPw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.token !== undefined) {
          alert('로그인 성공');
          localStorage.setItem('access_token :', result.token);
        } else {
          alert('로그인 실패');
        }
      });
  };

  render() {
    const { userId, userPw } = this.state;
    return (
      <div className="login_view">
        <div className="logo">
          <img alt="로그인 logo" src="../images/logo.png"></img>
        </div>
        <div className="login_input">
          <input
            type="text"
            id="userId"
            name="userId"
            placeholder="이메일 또는 전화번호를 입력하세요."
            onChange={this.handleChange}
          />
          <input
            type="password"
            id="userPw"
            name="userPw"
            placeholder="비밀번호를 입력하세요."
            onChange={this.handleChange}
          />
          <div className="btn">
            <button
              type="button"
              className="loginButton"
              onClick={this.loginFetch}
              disabled={
                userId.includes('@') && userPw.length > 4 ? false : true
              }
            >
              로그인
            </button>
          </div>
          <p>
            비밀번호 찾기 ㅣ <a href="/signup">회원가입</a>
          </p>
        </div>
        <div className="footer_button">
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
    );
  }
}

export default Login;
