import React from 'react';
import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <div class="login_view">
        <div class="logo">
          <img alt="로그인 logo" src="../images/logo.png"></img>
        </div>
        <div class="login_input">
          <input type="text" placeholder="이메일 또는 전화번호를 입력하세요." />
          <input type="password" placeholder="비밀번호를 입력하세요." />
          <button type="button" className="loginButton">
            로그인
          </button>
          <p>비밀번호 찾기 ㅣ 회원가입</p>
        </div>
        <div class="footer_button">
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
