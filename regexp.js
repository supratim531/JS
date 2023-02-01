console.log("This is on Regular Expression");

let string = "string"; // This is a simple string of JS
let regexp1 = /sayan/; // This is a regular expression literal in JS
regexp1 = /sayan/g; // g means global search
regexp1 = /sayan/i; // i means case insensitive
regexp1 = /sayan/gi; // mash up of g & i
console.log(string, typeof string);
console.log(regexp1, typeof regexp1);
console.log("The source of reg is:", regexp1.source);

let sentence = "Code with Sayan is great and also sayan bhai";

/*
Functions to match expressions
1. exec() => This function will return an array for match or null for no match
*/

let result = regexp1.exec(sentence);
console.log(result);
result = regexp1.exec(sentence);
console.log(result, result.index, result.input, result.groups);
result = regexp1.exec(sentence);
console.log(result);

result = regexp1.test(sentence);
console.log("The test method returns true if any match is present otherwise false ->", result);
result = regexp1.test("There is no name that's you are finding");
console.log("The test method returns true if any match is present otherwise false ->", result);

let regexp2 = /my/ig;
sentence = "This is my sentence and MY string";
result = sentence.match(regexp2); // returns array of results of matches or null
console.log(result);

result = sentence.search(regexp2); // returns the first match's index or -1 in failure
// result = "This is not that what I'm actually finding".search(regexp2);
console.log("This is the output of search:", result);

result = sentence.replace(regexp2, "YOUR"); // returns new replaced string with all the possible replacement(s)
console.log(result);