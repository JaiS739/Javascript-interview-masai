let null_data = null; //data type of null object
let undefined_data = undefined; // undefined

// console.log(typeof undefined_data);

// ----------------------xxxxxxxxxxxxxxxxxx-----------------------
// how javascript converts data type automaticaly:-

let sum = 5 + null; // it will give 5 as it has automatically changed null into zero(Number); type willbe number
let string_value = "5" + null; /// it will give 5null as js automatically changed the null into string:- type will be string

// console.log(typeof string_value);
// console.log(typeof sum);
let add = "5" + 2; // value "52" type will be string
// console.log(typeof add, add);

// in case of - * and / it will convert it into number:-

let minus = "5" - 2; // 3 and type will be number
// console.log(minus, typeof minus);

let multiply = "5" * 2; // 10 and type will be number
// console.log(multiply, typeof multiply);

// if both 5 and 2 will be string then it will work as number:-

// when we use characters instead of numbers as string with string number then type will be number but ans will be NaN:-

let NAN = "5" - "yes";
console.log(typeof NAN, NAN);
