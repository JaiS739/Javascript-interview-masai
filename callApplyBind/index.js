let obj1 = {
  first_name: "Jai",
  last_name: "Singh",
};

let printFullName = function (hometown, state) {
  // every function in js has access to the this keyword:-
  console.log(
    this.first_name +
      " " +
      this.last_name +
      " " +
      "and I am from" +
      " " +
      hometown +
      " " +
      state
  );
};

// now if I want to borrow this function for the first obj then I can use call method and this is called function borrowing":-

// printFullName.call(obj1);

// now suppose if I want to pass arguments in the function so I can do like:-

printFullName.call(obj1, "Indore", "MP");

// the only difference between call and apply that we pass the arguments as array:-
printFullName.apply(obj1, ["Indore", "MP"]);

// bind:-
// it returns a function which we can invoke later:-

let printMyName = printFullName.bind(obj1, "KNW", "MP");
printMyName();
// console.log(printMyName);
