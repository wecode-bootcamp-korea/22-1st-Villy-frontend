import React from 'react';
import './Signup.scss';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      phone_number: '',
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  signUpFetch = () => {
    fetch('http://10.58.5.217:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phone_number: this.state.phone_number,
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
    return (
      <div className="signup_view">
        <h1>회원가입</h1>
        <form className="signup_form" onSubmit={this.signUpFetch}>
          <div className="signup_name">
            <span>이름</span>
            <br />
            <input
              type="text"
              name="name"
              placeholder="이름을 입력해 주세요."
              onChange={this.handleInput}
            />
          </div>
          <div className="signup_phone">
            <span>연락처</span>
            <br />

            <input
              type="text"
              name="phone_number"
              placeholder="연락처('-' 제외)를 입력해 주세요."
              onChange={this.handleInput}
            />
          </div>

          <div className="signup_detail">
            <span>아이디</span>
            <br />
            <input
              type="text"
              name="email"
              placeholder="아이디(이메일)를 입력해 주세요."
              onChange={this.handleInput}
            />
            <br />
            <span>비밀번호</span>
            <br />
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력해 주세요."
              onChange={this.handleInput}
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
            <button
              type="button"
              id="button"
              className="signup"
              onClick={this.signUpFetch}
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
        </form>
      </div>
    );
  }
}

export default Signup;
