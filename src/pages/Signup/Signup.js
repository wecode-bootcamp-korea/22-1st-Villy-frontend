import React from 'react';
// import { validationFor } from './Validation';
import { POST_SIGNUP_API } from '../../../src/config.js';
import './Signup.scss';

class Signup extends React.Component {
  state = {
    name: '',
    email: '',
    pw: '',
    mobile: '',
  };

  // 입력 함수
  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // Back이랑 연결하는 fetch 함수
  requestSignup = () => {
    fetch(`${POST_SIGNUP_API}`, {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        mobile: this.state.mobile,
        email: this.state.email,
        password: this.state.pw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.access_token) {
          alert('회원가입 성공');
          localStorage.setItem('access_token', res.access_token);
          this.goToMain();
        } else {
          alert('회원가입 실패');
        }
      });
  };

  goToMain = () => this.props.history.push('/');

  // 입력 완료 후 실행되는 함수
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.requestSignup();
    }
  };

  render() {
    return (
      <div className="Signup">
        <div className="signupView">
          <h1>회원가입</h1>
          <div className="signupInputWrapper">
            <span className="signupHeader">이름</span>
            <br />
            <input
              type="text"
              name="name"
              className="signupInput"
              value={this.state.name}
              placeholder="이름을 입력해 주세요."
              onChange={this.handleInput}
            />
          </div>
          <div className="signupInputWrapper">
            <span className="signupHeader">연락처</span>
            <br />
            <input
              type="text"
              name="mobile"
              className="signupInput"
              value={this.state.mobile}
              placeholder="연락처를 입력해 주세요."
              onChange={this.handleInput}
            />
          </div>
          <div className="signupInputWrapper">
            <span className="signupHeader">아이디</span>
            <br />
            <input
              type="text"
              name="email"
              className="signupInput"
              value={this.state.email}
              placeholder="아이디(이메일)를 입력해 주세요."
              onChange={this.handleInput}
            />
            <br />
          </div>
          <div className="signupInputWrapper">
            <span className="signupHeader">비밀번호</span>
            <br />
            <input
              type="password"
              name="pw"
              className="signupInput"
              value={this.state.pw}
              placeholder="비밀번호를 입력해 주세요."
              onKeyPress={this.handleKeyPress}
              onChange={this.handleInput}
            />
          </div>
          {/* // 추가로 구현할 예정...
          <div className="check_all">
            <input type="checkbox" className="signupCheckbox"></input>
            모두 동의하기
          </div>
          <div className="checkDetail">
            <input type="checkbox" className="signupCheckbox"></input>
            만 14세 이상입니다.
            <br />
            <input type="checkbox" className="signupCheckbox"></input>이용 약관
            동의
          </div> */}
          <div className="footerButton">
            <button
              type="submit"
              className="signupSubmit"
              onKeyPress={this.handleKeyPress}
              onClick={this.requestSignup}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
