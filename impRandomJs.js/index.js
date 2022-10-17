// cut the length of the array:-

let arr = [1, 2, 3, 4, 5];
// print only 2 Elements

arr.length = 3;

// console.log(arr); // [1,2,3]
// -----------xxxxxxxxxx-------------

// find the sum:-

let sum = arr.reduce((acc, ele) => {
  return acc + ele;
}, 0);

// console.log(sum);

// ---------XXXXXXXXXXXXX-----------

// remove the duplicate values:-

// we can use set for this :-
// set removes the duplicates value, undefined, and empty vlaues

let arr2 = [1, 1, 2, 2, 3, 4, 5, 5];
let data = new Set(arr2);
// console.log(data); // it will return in object braces(curly)

// to print in array form:-

// console.log([...data]);

// ----------Comma Operator----------

// Comma Operator:-

let x = 10;

// first left side value will do the calculation and the right value will give the answer:-
let y = 20;
z = (x++, x); // it will give 11

k = ((y += 20), y); //it will give 40

p = (y, 5); // it will give 5  as there is no operation in the first part
// console.log(p);

// ---------xxxxxxxxxxx-----------

// Swapping using destructuring:-

let a = 5;
let b = 6;

[a, b] = [b, a];
// console.log(a, b);

// -----------xxxxxxxxxx----------------

// delete in array :-

let num = [1, 2, 3];
delete num[1]; // give index value
// console.log(num); // [1,<empty item>,3]

// ----------------xxxxxxxxxxxxxx------------

// merging two arrays of which one element is same:-

let num1 = [1, 2, 3];
let num2 = [3, 4, 5];
let nums = [...num1, ...num2];
// console.log(nums); // [1,2,3,3,4,5]; it will take both elements unlike object

// --------------IMPORTANT-------------

let value = 5;

setTimeout(() => {
  // console.log(value); // 100
}, 0);

value = 100;

// explaination:- setTimeout will go into event loop callback queue and it will be excuted after synchronous lines of codes so code will run and reassign the value to be 100 so it will print 100 when setTimeout will run \

// -------------xxxxxxxxx----------

let a1 = 5;
let b1 = 5;
let c1 = 6;

// console.log((a1 == b1) == --c1); //false

// explaination:- moving from left to right - a1===b1 will return true(boolean) now a1==b1(boolean) ==--c1(number) comparing boolean with number will return false

// how to get OS platform:-

// in devTools in console write navigator.platform

// -------------IMPORTANT-------------

for (var i = 0; i <= 3; i++) {
  setTimeout(() => {
    // console.log(i); // 4 times 4
  }, 1000);
}

// explaination:- var is a global variable , first the loop will run and after that value of i in the global will be 4 now setTimeout will run for 4 times and print the value of i i.e. 4 for 4 times.

// But in case of let it will print 0 1 2 3 as let is local variable

// -------------IMPORTANT-------------
// console.log(+true);  // it will print 1
// console.log(typeof +true); // it will number

// -------------IMPORTANT-------------

let number = 0;

// console.log(number++); // post increament-  0 as value first consoled and then added
// console.log(++number); // pre increament-  2 as increased value assigned to number in the post increament and now it is pre-increament so value first increased and then assigned
// console.log(number); // pre increament increament  updated value ie 2

// -------------IMPORTANT-------------

// console.log(typeof typeof 1); // string
// explaination:- type of 1 is number and number is string

// -------------IMPORTANT-------------

// console.warn(
//   setInterval(() => {
//     console.log("hi");  // it will give "hi" after each 1sec and one id. In this it will give 6 as an id to clear the interval
//   }, 1000)
// );
