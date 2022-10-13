// Whenever we want to attach a function with the object in that case we use
// these three things. We can't use normal function in objects.

// like:-

// let getEmail = (name) => {
//   // so in this case you wil not get the name from the object students:-
//   return `${name}@gmail.com`;
// };

// let students = {
//   name: "jai",
//   age: 28,
//   roll: 739,
//   getEmail: function () {
//     return `${this.name}@gmail.com`;
//   },
// };

// console.log(students.getEmail);

// to overcome this problem we these three methods:-

// let suppose if i have two objects one of teacher and student:-

// let teacher = {
//   name: "john",
//   age: 35,
// };

// now if I want to use that function getEmail of students in teacher so I can use with the help of "call":-
// eg:-

// console.log(students.getEmail.call(teacher));   // john@gmail.com

// we can also write the function outside of the object:-

let students = {
  name: "jai",
  age: 28,
  roll: 739,
};

let teacher = {
  name: "john",
  age: 35,
};

// no need to pass name or any property of object it will take automatically:-
function getEmail(sub1, sub2) {
  return `${this.name}@gmail.com i teach ${sub1} and ${sub2}`;
}

let answer = getEmail.call(students, "maths", "science"); /// here we  are passing arguments of any type:
// console.log(answer);
// so like this you can use:-

// apply:- apply will work same like call but to pass arguments we have to use array

// eg:-

let answer_apply = getEmail.apply(students, ["maths", "science"]); // here we are passing arguments in the form of array:-
// console.log(answer_apply);

// bind:- it will attach the function only and you can call that function later:-

// eg:-

let answer_bind = getEmail.bind(students, "maths", "science");
console.log(answer_bind());

// second way of writing:-
// let answer_bind = getEmail.bind(students, "maths", "science")();
// console.log(answer_bind);
