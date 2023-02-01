/*
Some character sets -> [] in regexp:
1. /s[a-z]yan/ = it means any character from a to z can be placed over here
2. /s[axe]yan/ = it means only a|x|e can be placed
3. /s[^a-z]yan/ = it means any character except from a to z can be placed over here
4. /s[^axe]yan/ = it means any character except a|x|e can be placed
*/

let regexp = /s[a-z]yan/;
let string = "sayan";
console.log(regexp.exec(string));

regexp = /s[axe]yan/;
string = "sayan";
string = "sxyan";
string = "seyan";
string = "spyan";
// string = "saxeyan";
console.log(regexp.exec(string));

regexp = /s[^a-z]yan/;
string = "sAyan";
console.log(regexp.exec(string));

regexp = /sayan[0-9]?u/;
string = "sayanu";
string = "sayan8u";
console.log(regexp.exec(string));

/*
Some quantifiers -> {} in regexp:
1. /sk{3}yan/ = k can occurs exact 3 times after s
2. /sk{0,3}yan/ = k can occurs exact 0 to 3 times after s
*/

regexp = /sa{3}yan/;
string = "saaayan";
// string = "saaaayan";
console.log(regexp.exec(string));

regexp = /sa{0,3}yan/;
string = "sayan";
// string = "saaabyan";
console.log(regexp.exec(string));

/*
We use () for groupings:
1. /(say){2}/ = it means 'say' can be occurs exact 2 times in the string
*/

regexp = /(say){2}/;
regexp = /(say){0,2}/;
string = "sayjkd";
console.log(regexp.exec(string));

regexp = /(say){0,2}([0-9]r){0,5}/;
string = "saysay2r1r";
console.log(regexp.exec(string));