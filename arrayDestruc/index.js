let arr = ["jai", "sri", "srinika", "jaishvik"];

let [father, mother, daughter, son] = arr;

console.log(father, mother, son, daughter);

// skip the 2 value:- ie sri

// here in place of that value give empty space:-
let [daddy, , naina, betaji] = arr;

// console.log(daddy, naina, betaji);

// -------------xxxxxxxx------------

// default value:-

// as there is no 4 index in the arr so it will give undefined if we try to console that value:-
// now in place of undefined we can give some message:-

// eg:-

let [papa, , , , lastValue = "unknown value"] = arr;

console.log(lastValue);

// but in case if there is 5th index then it will give the value of that 4th index:-
