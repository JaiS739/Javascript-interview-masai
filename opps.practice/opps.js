function outest() {
  //   let c = 10;
  function outer(b) {
    var x = 5;
    function inner() {
      console.log(x, b, c);
    }

    return inner;
  }
  return outer;
}
let c = 200;

let y = outest()("hellow");

y();
