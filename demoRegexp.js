let username = "u";
const usernameRegexp = /^[a-z]([a-zA-Z0-9]){7,29}$/;
console.log(usernameRegexp.exec(username));

let phone = "6786787889";
const phoneRegexp = /^[0-9]{10}$/;
console.log(phoneRegexp.exec(phone));

let email = "W3.fhs.dg@89.fsdkj.sj";
const emailRegexp = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,20}$/;
console.log(emailRegexp.exec(email));

let phone2 = "8981702261";
const phone2Regexp = /^(\+91(\s+)?)?[0-9]{10}$/;
console.log(phone2Regexp.exec(phone2));