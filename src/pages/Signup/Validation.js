function validationEmail(email) {
  // 이메일 양식이 아니면 안됨!
  const reg_email =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return reg_email.test(email);
}

function validationpasswordd(password) {
  // 영문+숫자+특수문자를 포함하는 6~20자리
  const reg_passwordd =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,20}$/;
  return reg_passwordd.test(password);
}

function validationName(name) {
  // 영문, 한글 글자 수 없이 입력 가능 (숫자만 제외!)
  const reg_name = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|\*]+$/;
  return reg_name.test(name);
}

function validationMobile(mobile) {
  // '-' 포함
  const reg_mobile = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
  return reg_mobile.test(mobile);
}

// 위의 Validation을 모두 합친 객체
export const validationFor = {
  name: validationName,
  mobile: validationMobile,
  email: validationEmail,
  password: validationpasswordd,
};
