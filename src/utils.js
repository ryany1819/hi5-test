const validateEmail = (email) => {
    console.log('read', email)
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}
const validateUsername = (uname) => {
    console.log(uname);
    let ret = 0;
    if (!uname.length) ret = UNAME_ERR.Empty; // 1
    else if (!validateEmail(uname)) ret = UNAME_ERR.BadFormat;
    return ret;
}
const validatePassword = (pwd) => {
    let ret = 0;
    if (!pwd.length) ret = PWD_ERR.Empty;
    else if (pwd.length < 3) ret = PWD_ERR.TooShort;
    return ret;
}
const UNAME_ERR = {
    'Empty': 1,
    'BadFormat': 2
};
const UNAME_ERR_MSG = {
    1: '帳號尚未輸入',
    2: '請輸入正確的Email格式'
}
const PWD_ERR = {
    'Empty': 1,
    'TooShort': 2
}
const PWD_ERR_MSG = {
    1: '密碼尚未輸入',
    2: '密碼輸入字數過少'
}
export {
    validateUsername, validatePassword, UNAME_ERR, UNAME_ERR_MSG, PWD_ERR, PWD_ERR_MSG
}