// trying to create our own bind function:-

let naam = {
  first_name: "Jai",
  last_name: "Krishna",
};

let printNmae = function (hometown) {
  console.log(this.first_name, this.last_name + " " + hometown);
};

let print_name = printNmae.bind(naam, "Indore");

print_name();

// to make the function accessible by all use prototype:-

Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function () {
    obj.apply(args[0], params);
  };
};

let print_name2 = printNmae.mybind(naam, "Indore");
print_name2();
