// find():-

let arr = [1, 4, 2, 3, 4, 5];

let divisible_by2 = arr.find((ele) => ele % 2 == 0);

// console.log(divisible_by2); // find will return then first value

// ------------------------xxxxxxxxxxxxxxxxxxxxxxxxx----------------------------

// some():- returns boolean value

let arr2 = [1, 4, 2, 4, 5];
let divisible_by3 = arr2.some((ele) => ele % 3 == 0);
// console.log(divisible_by3); //if any element is present then it wil return true else false

// ------------------------xxxxxxxxxxxxxxxxxxxxxxxxx----------------------------

// map():-it creates an entirely new array.

let arr3 = [1, 4, 2, 4, 5];
let ans = arr3.map((e) => e * 3);

// console.log(ans);

// ------------------------xxxxxxxxxxxxxxxxxxxxxxxxx----------------------------

// forEach():- it does not create a new array based on the given array
let arr4 = [1, 4, 2, 4, 5];

let for_ans = [];

arr4.forEach((e) => for_ans.push(e * 2));

console.log(for_ans);
