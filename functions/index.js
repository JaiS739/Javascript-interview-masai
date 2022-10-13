//Q- IIFE- immediate invoked function expresssion

// (function square(n) {
//   console.log(n * n);
// })(5);

// hoisting in function :-

var x = 5;

function print_value() {
  console.log(x); //as we trying to clg x before its local value of x and hoisting always declare the undefined value to the variables so this function will print undefined
  var x = 6;

  //   but if you put this clg after x so it will take value from its local scope and it will return 6
}

// print_value();

//Q- spread operator and rest parameters:-

// what we pass as parameter is called rest parameters and as arguments is call spread operator
function multiply(...n) {
  console.log(n);
}

let arr = [1, 2];
// multiply(...arr);

// interview question :-

// always pass the rest parameter at the last so that it can take the remaining values:-
// eg

let fun = (a, b, ...c) => {
  console.log(a, b, c);
};

// fun(1, 2, 3, 4, 5, 6, 7, 8); //return 1 2 [3,4,5,6,7,8]

// Q -callback function:-
// --------------------------xxxxxxxxxxxxxxxxxxxxx-----------------------
// named function :-
// giving name to the anonymous function of function expresssion:-

// let user = function details() {
//   console.log("jai krishna singh");
// };

// details(); // it will give details is not defined as it is

// you can access this details inside that function user:-
// like this:-

let user = function details() {
  console.log(details);
};

// user(); // it will return :- ƒ details() {  console.log(details);}

let sayHi = () => {
  return (() => 0)(); // it will return 0 as ()=>0 this is an arrow function and after that by this () we are calling the function
};

// console.log(sayHi());

// --------------------------xxxxxxxxxxxxxxxxxxxxx-----------------------
