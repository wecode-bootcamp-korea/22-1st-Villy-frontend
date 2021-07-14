import React from 'react';
import { validationFor } from './Validation';
import { POST_SIGNUP_API } from '../../../src/config.js';
import './Signup.scss';

class Signup extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
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
  doValidation = () => {
    const userInputs = Object.entries(this.state);
    console.log(userInputs);
    userInputs
      .forEach(el => {
        console.log(validationFor[el[0]](el[1]));
        if (validationFor[el[0]](el[1]) === false) {
          return alert('양식에 맞지 않습니다');
        } else return;
      })
      .then(this.requestSignup());
  };

  // Back이랑 연결하는 fetch 함수
  requestSignup = () => {
    fetch(`${POST_SIGNUP_API}`, {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        mobile: this.state.mobile,
        email: this.state.email,
        password: this.state.password,
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
  };

  render() {
    return (
      <div className="Signup">
        <div className="signupView">
          <h1>회원가입</h1>

          {INPUT_INFO.map(
            ({ title, type, name, value, placeholder }, index) => {
              return (
                <div key={index} className="signupInputWrapper">
                  <span className="signupHeader">{title}</span>
                  <br />
                  <input
                    type={type}
                    name={name}
                    className="signupInput"
                    value={`${this.state[value]}`}
                    placeholder={placeholder}
                    onChange={this.handleInput}
                  />
                </div>
              );
            }
          )}
          <div className="footerButton">
            <button
              type="submit"
              className="signupSubmit"
              onKeyPress={this.handleKeyPress}
              onClick={this.doValidation}
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

const INPUT_INFO = [
  {
    title: '이름',
    type: 'text',
    name: 'name',
    value: 'name',
    placeholder: '이름을 입력해 주세요.',
  },
  {
    title: '연락처',
    type: 'text',
    name: 'mobile',
    value: 'mobile',
    placeholder: '연락처를 입력해 주세요.',
  },
  {
    title: '아이디',
    type: 'text',
    name: 'email',
    value: 'email',
    placeholder: '아이디(이메일)을 입력해 주세요.',
  },
  {
    title: '비밀번호',
    type: 'password',
    name: 'password',
    value: 'password',
    placeholder: '비밀번호를 입력해 주세요.',
  },
];
