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

  // Validation을 체크하는 함수 (구현중...)
  // doValidation = e => {
  //   const userInputs = Object.entries(this.state);
  //   console.log(userInputs);
  //   userInputs.forEach(el => {
  //     console.log(validationFor[el[0]](el[1]));
  //     if (!validationFor[el[0]](el[1])) {
  //       return alert('양식에 맞지 않습니다');
  //     }
  // });

  // 리팩토링 이전 Validation 함수
  // if (!validationName(this.state.name)) {
  //   alert('이름을 입력해주세요.');
  // }
  // if (!validationMobile(this.state.mobile)) {
  //   alert('번호를 입력해주세요.');
  // }
  // if (!validationEmail(this.state.email)) {
  //   alert('이메일 형식이 유효하지 않습니다.');
  // }
  // if (!validationPwd(this.state.pw)) {
  //   alert('영문,숫자,특수문자를 혼합하여 6~20자 이내로 입력해주세요.');
  // }
  // if (
  //   validationName(this.state.name) &&
  //   validationMobile(this.state.mobile) &&
  //   validationEmail(this.state.email) &&
  //   validationPwd(this.state.pw)
  // ) {
  //   return true;
  //   // alert('회원가입 완료');
  // } else {
  //   alert('입력란을 다시 확인하세요.');
  //   return false;
  // }
  // };

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
        } else {
          alert('회원가입 실패');
        }
      });
  };

  // 입력 완료 후 실행되는 함수
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.requestSignup();
    }
    // (구현중...)
    // if (e.key === 'Enter' && this.doValidation()) {
    //   return this.requestSignup();
    // }
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
