export function chkEmail(email) {
  // 이메일 양식이 아니면 안됨!
  var reg_email =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return reg_email.test(email) ? true : false;
}

export function chkPwd(pw) {
  // 영문+숫자+특수문자를 포함하는 6~20자리
  var reg_pwd =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,20}$/;
  return !reg_pwd.test(pw) ? false : true;
}

export function chkName(name) {
  // 영문, 한글 글자 수 없이 입력 가능 (숫자만 제외!)
  var reg_name = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|\*]+$/;
  return reg_name.test(name) ? true : false;
}

export function chkPhone(phone) {
  // '-' 포함
  var reg_phone = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
  return reg_phone.test(phone) ? true : false;
}
