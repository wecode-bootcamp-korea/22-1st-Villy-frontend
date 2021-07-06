import React, { useImperativeHandle } from 'react';
import './Signup.scss';

class Signup extends React.Component {
  render() {
    return (
      <div className="signup_view">
        <h1>회원가입</h1>
        <div className="signup_name">
          <span>이름</span>
          <br />
          <input type="text" placeholder="이름을 입력해 주세요." />
        </div>
        <div className="signup_phone">
          <span>연락처</span>
          <br />
          <div className="check_phone">
            <span>
              <input
                type="text"
                placeholder="연락처('-' 제외)를 입력해 주세요."
              />
              <button type="button" className="button">
                인증번호 발송
              </button>
            </span>
            <br></br>
            <span>
              <input type="text" placeholder="인증번호를 입력해 주세요." />
              <button type="button" className="button">
                확인
              </button>
            </span>
          </div>
        </div>
        <div className="signup_detail">
          <span>아이디</span>
          <br />
          <input type="text" placeholder="아이디(이메일)를 입력해 주세요." />
          <br />
          <span>비밀번호</span>
          <br />
          <input type="password" placeholder="비밀번호를 입력해 주세요." />
          <br />
          <span>비밀번호 확인</span>
          <br />
          <input type="password" placeholder="비밀번호를 다시 입력해 주세요." />
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
          <button type="button" className="signup">
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
