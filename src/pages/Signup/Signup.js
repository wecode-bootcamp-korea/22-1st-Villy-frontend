import React from 'react';
import {
  validationEmail,
  validationPwd,
  validationName,
  validationPhone,
} from './Validation';
import './Signup.scss';

class Signup extends React.Component {
  nameRef = React.createRef();
  phoneRef = React.createRef();
  emailRef = React.createRef();
  pwRef = React.createRef();

  state = {
    name: '',
    email: '',
    password: '',
    phone: '',
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  checkAll = e => {
    if (validationName(this.state.name) === false) {
      alert('이름을 입력해주세요.');
      this.nameRef.current.value = '';
    }

    if (validationPhone(this.state.phone) === false) {
      alert('번호를 입력해주세요.');
      this.phoneRef.current.value = '';
    }

    if (validationEmail(this.state.email) === false) {
      alert('이메일 형식이 유효하지 않습니다.');
      this.emailRef.current.value = '';
    }

    if (validationPwd(this.state.pw) === false) {
      alert('영문,숫자,특수문자를 혼합하여 6~20자 이내로 입력해주세요.');
      this.pwRef.current.value = '';
    }

    if (
      validationName(this.state.name) &&
      validationPhone(this.state.phone) &&
      validationEmail(this.state.email) &&
      validationPwd(this.state.pw)
    ) {
      alert('회원가입 완료');
    } else {
      alert('입력란을 다시 확인하세요.');
    }
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.checkAll();
    }
  };

  signUpFetch = () => {
    fetch('http://10.58.5.217:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.pw,
        phone: this.state.phone,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.token !== undefined) {
          alert('회원가입 성공');
          localStorage.setItem('access_token :', result.token);
        } else {
          alert('회원가입 실패');
        }
      });
  };

  render() {
    console.log(this.state);
    return (
      <div className="Signup">
        <div className="signupView">
          <h1>회원가입</h1>
          <div className="signupName">
            <span className="signupHeader">이름</span>
            <br />
            <input
              type="text"
              name="name"
              className="signupInput"
              value={this.state.name}
              ref={this.nameRef}
              placeholder="이름을 입력해 주세요."
              onChange={this.handleInput}
              onKeyPress={this.handleKeyPress}
            />
          </div>
          <div className="signup_phone">
            <span className="signupHeader">연락처</span>
            <br />
            <input
              type="text"
              name="phone"
              className="signupInput"
              value={this.state.phone}
              ref={this.phoneRef}
              placeholder="연락처를 입력해 주세요."
              onChange={this.handleInput}
              onKeyPress={this.handleKeyPress}
            />
          </div>
          <div className="signup_detail">
            <span className="signupHeader">아이디</span>
            <br />
            <input
              type="text"
              name="email"
              className="signupInput"
              value={this.state.email}
              ref={this.emailRef}
              placeholder="아이디(이메일)를 입력해 주세요."
              onChange={this.handleInput}
              onKeyPress={this.handleKeyPress}
            />
            <br />
            <span className="signupHeader">비밀번호</span>
            <br />
            <input
              type="password"
              name="password"
              className="signupInput"
              value={this.state.pw}
              ref={this.pwRef}
              placeholder="비밀번호를 입력해 주세요."
              onChange={this.handleInput}
              onKeyPress={this.handleKeyPress}
            />
            <br />
          </div>
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
          </div>
          <div className="footerButton">
            <button
              type="submit"
              className="signupSubmit"
              onClick={this.checkAll}
            >
              회원가입
            </button>
            <br />
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
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
