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

// ----------XXXXXXXXXXXX----------

// Comma Operator:-

let x = 10;

// first left side value will do the calculation and the right value will give the answer:-
let y = 20;
z = (x++, x); // it will give 11

k = ((y += 20), y); //it will give 40

p = (y, 5); // it will give 5
// console.log(p);

// ---------xxxxxxxxxxx-----------

// Swapping using destructuring:-

let a = 5;
let b = 6;

[a, b] = [b, a];
console.log(a, b);
