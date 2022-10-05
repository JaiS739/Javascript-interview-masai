// you can declare var and let with the same name inside a block scope but you can to vice versa

var a = 5;

if (true) {
  let a = 6;
  console.log(a);
}

// we can redeclare the same name variable incase of var but not in case of others:
var a = 7;

console.log(a);
