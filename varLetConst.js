// you can declare var and let with the same name inside a block scope but you can to vice versa

var a = 5;

if (true) {
  let a = 6;
  console.log(a);
}

// we can redeclare the same name variable incase of var but not in case of others:
var a = 7;

console.log(a);
// ---------------xxxxxxxxxxxxx--------------
// temporal dead zone:-
// defination :- Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed.

console.log(z); //from line no 18 to 20  ie from which let and const can not be accessed is called temporal dead zone

let z = 5;
