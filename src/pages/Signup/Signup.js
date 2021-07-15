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

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  doValidation = () => {
    const userInputs = Object.entries(this.state);
    return userInputs.every(el => validationFor[el[0]](el[1]));
  };

  requestSignup = () => {
    const { name, mobile, email, password } = this.state;
    if (this.doValidation()) {
      fetch(`${POST_SIGNUP_API}`, {
        method: 'POST',
        body: JSON.stringify({
          name,
          mobile,
          email,
          password,
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
    } else {
      return alert('양식의 맞지 않습니다!');
    }
  };

  goToMain = () => this.props.history.push('/');

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
                    autoComplete="off"
                    onKeyPress={
                      index === INPUT_INFO.length - 1
                        ? this.handleKeyPress
                        : undefined
                    }
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
