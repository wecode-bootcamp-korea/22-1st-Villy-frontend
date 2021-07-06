import React from 'react';
import { chkEmail, chkPwd, chkName, chkAddress } from './Validation';
import './Signup.scss';

class Signup extends React.Component {
  emailRef = React.createRef();
  pwRef = React.createRef();

  state = {
    name: '',
    email: '',
    password: '',
    phone: '',
  };

  emailInput = email => {
    this.setState({
      email: email.target.value,
    });
  };

  passwordInput = pw => {
    this.setState({
      pw: pw.target.value,
    });
  };

  nameInput = name => {
    this.setState({
      name: name.target.value,
    });
  };

  phoneInput = phone => {
    this.setState({
      phone: phone.target.value,
    });
  };

  checkAll = e => {
    if (chkName(this.state.name) === false) {
      alert('이름을 입력해주세요.');
    }

    if (chkEmail(this.state.email) === false) {
      alert('이메일 형식이 유효하지 않습니다.');
      this.emailRef.current.value = '';
    }

    if (chkPwd(this.state.pw) === false) {
      alert('영문,숫자를 혼합하여 6~12자 이내로 만들어주세요.');
      this.pwRef.current.value = '';
    }

    if (chkAddress(this.state.address) === false) {
      alert('주소를 입력해주세요.');
    }

    if (
      chkName(this.state.name) &&
      chkEmail(this.state.email) &&
      chkPwd(this.state.pw) &&
      chkAddress(this.state.address) === true
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
    console.log(this.state.name);
    return (
      <div className="signup_view">
        <h1>회원가입</h1>

        <div className="signup_name">
          <span>이름</span>
          <br />
          <input
            type="text"
            name="name"
            placeholder="이름을 입력해 주세요."
            onChange={this.nameInput}
            onKeyPress={this.handleKeyPress}
          />
        </div>
        <div className="signup_phone">
          <span>연락처</span>
          <br />

          <input
            type="text"
            name="phone"
            placeholder="연락처('-' 제외)를 입력해 주세요."
            onChange={this.phoneInput}
            onKeyPress={this.handleKeyPress}
          />
        </div>

        <div className="signup_detail">
          <span>아이디</span>
          <br />
          <input
            type="text"
            name="email"
            ref={this.emailRef}
            placeholder="아이디(이메일)를 입력해 주세요."
            onChange={this.emailInput}
            onKeyPress={this.handleKeyPress}
          />
          <br />
          <span>비밀번호</span>
          <br />
          <input
            type="password"
            name="password"
            ref={this.pwRef}
            placeholder="비밀번호를 입력해 주세요."
            onChange={this.passwordInput}
            onKeyPress={this.handleKeyPress}
          />
          <br />
        </div>
        <div className="check_all">
          <input type="checkbox"></input>
          모두 동의하기
        </div>
        <div className="signup_check">
          <input type="checkbox"></input>
          만 14세 이상입니다.
          <br />
          <input type="checkbox"></input>이용 약관 동의
        </div>
        <div className="footer_button">
          <button type="submit" className="signup" onClick={this.checkAll}>
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
    );
  }
}

export default Signup;
