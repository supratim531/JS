/*
Short hand character classes:
1. /\w sayan/ = '\w' means word character means (_ or a-z or A-Z or 0-9)
2. /\w+/ = '\w+' means 1 or more than 1 word character(s) means (_ or a-z or A-Z or 0-9)
3. /\W/ = '\W' means non alnum character or vice versa of w
4. /\d/ = '\d' means 1 digit means (0-9)
5. /\D/ = '\D' means 1 non digit means vice versa of d
6. /\s/ = '\s' means one whitespace character like ' ' or '\t'
7. /\s+/ = '\s+' means one or more than 1 whitespace character like ' ' or '\t'
8. /tyre\b/ = '\b' means word boundary
*/

let regexp = /\w art/;
let string = "s art";
console.log(regexp.exec(string));

regexp = /\w/;
string = "kdhy";
console.log(regexp.exec(string));

regexp = /\W+/;
string = "&";
console.log(regexp.exec(string));

regexp = /\s+is great/;
string = "           \t   \t sis great";
string = "           \t   \t is great";
console.log(regexp.exec(string));

regexp = /\b69/;
string = "fsdkjfh69isgreat"
string = "fsdkjfh 69isgreat"
string = "fsdkjfh\t69isgreat"
console.log(regexp.exec(string));

/*
Assertions:
1. /s(?=a)/ = it means there must be an 'a' after s
2. /s(?!a)/ = it means there must be any character after s except a
*/

regexp = /s(?!a)/;
regexp = /s(?=a)/;
string = "saaaa"
string = "sdsa"
console.log(regexp.exec(string));