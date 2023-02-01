/*
Some symbols in regexp:
1. /^sayan/ = ^ means the string should startswith(sayan)
2. /sayan$/ = $ means the string should endswith(sayan)
3. /s.yan/ = . means any one single character can be placed in that position
4. /s*yan/ = * means any no. of character(s) can be placed in that position even 0
5. /sa?yank?/ = ? means the character placed before '?' is optional
*/

let regexp = /sa?yant?k/;
let string = "sayanj";
console.log(regexp.exec(string));

regexp = /s.yan/;
string = "siyan";
console.log(regexp.exec(string));

regexp = /s*yan/;
// string = "syan";
// string = "sayan";
string = "sklklklyan";
console.log(regexp.exec(string));