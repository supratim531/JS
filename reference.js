let arr = Array("sayan", 65, { a: 78, b: 90 }, false, undefined, null, 89.90);
console.log(arr);
console.log(typeof arr);
arr[2] = "name";
console.log(arr);
let ob = { a: 15, b: 20 };
console.log("ob is an array: " + Array.isArray(ob));
console.log("arr is an array: " + Array.isArray(arr));

let nums = [234, 654, 76, 756, 8];
console.log(nums);
nums.push(1009);
console.log(nums);
nums.unshift(1008);
console.log(nums);
nums.pop();
console.log(nums);
nums.shift();
console.log(nums);
nums.splice(1, 2);
console.log(nums);

let nums1 = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 0];
console.log(nums1, nums2);
console.log("Concatinating nums1 into nums2");
console.log(nums2.concat(nums1));

let candidate = {
  name: "Haris Ram",
  channel: "CodeWithHarry",
  age: 28,
  salary: 5e5
};
console.log(candidate);
console.log(candidate["age"], candidate.channel, candidate["salary"], candidate.name);