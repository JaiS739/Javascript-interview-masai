// source youtube channel :- RoadSideCoder

// function outer() {
//   let a = 5;
//   function inner(c) {
//     let b = 6;
//     console.log(a + b + c);
//   }
//   return inner;
// }

// // in this way you can call the inner function ()():-
// outer()(5);

// ------------XXXXXXXXXXXXXXX------------

// function inside functions:

// function outer() {
//   return function inner1(a) {
//     return function inner2(b) {
//       return function inner3(c) {
//         console.log(a + b + c);
//       };
//     };
//   };
// }

// outer()(5)(6)(7); //  18

// ------------XXXXXXXXXXXXXXX------------

// function createBase(a) {
//   return function (b) {
//     console.log(a + b);
//   };
// }

// // create function with the help of below given expressions:-
// var addSix = createBase(6);
// addSix(10);
// addSix(21);

// ------------XXXXXXXXXXXXXXX------------

// optimise the time taken by the function eg:-

// function index(index) {
//   let arr = [];
//   for (let i = 0; i < 1000; i++) {
//     arr[i] = i * i;
//   }

//   console.log(arr[index]);
// }

// console.time("6");
// index(6); //6.84ms
// console.timeEnd("6");

// console.time("12");
// index(12); //0.45ms
// console.timeEnd("12");

// now to opitmes this code we can use closure:-

// function index() {
//   let arr = [];

//   for (let i = 0; i < 1000; i++) {
//     arr[i] = i * i;
//   }
//   // closure:-
//   return function (index) {
//     console.log(arr[index]);
//   };
// }

// console.time("6");
// index()(6); //3.99ms
// console.timeEnd("6");

// console.time("12");
// index()(12); // 0.119ms
// console.timeEnd("12");

// ------------XXXXXXXXXXXXXXX------------

// private counter:-

// function counter() {
//   let counter = 0;

//   function add(increament) {
//     counter = counter + increament;
//   }

//   function subtract(decreament) {
//     counter = counter - decreament;
//   }

//   function value() {
//     return "counter=" + counter;
//   }

//   return {
//     add,
//     subtract,
//     value,
//   };
// }

// let x = counter();
// x.add(5);
// x.subtract(1);
// x.subtract(1);
// console.log(x.value());

// ------------XXXXXXXXXXXXXXX------------

// module pattern:-
// check it later:-

// ------------XXXXXXXXXXXXXXX------------

// function like once:-

// now we want to run our function only once:-

let view;
function connectWithMe() {
  let connections = 0;
  connections++;
  return function () {
    if (connections > 0) {
      console.log("bye");
    } else {
      view = "Jai";
      console.log("hello", view);
      connections++;
    }
  };
}

let isViewed = connectWithMe();
isViewed();
