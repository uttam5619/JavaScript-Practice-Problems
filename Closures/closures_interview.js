

/*
function outer(x) {
  return function (y = x) {
    console.log(x)
    let x = 20;
    console.log(x+y);
  };
}

outer(10)();
*/

/*
Output : 10 and 30
this output is wrong x is in the temporal ddead zone.
function will not try to find the value of x using lexical
scope because x is already in the scope of the function.
*/


/*
function outer() {
  inner();
  function inner() {
    console.log(x);
  }
  let x = 10;
}

outer();
//Output: ReferenceError: Cannot access 'x' before initialization
*/

/*
var x = 5;
function test() {
    if(true) {
      var x = 10;
    }
    console.log(x);
}

test();
console.log(x);
*/


/*
console.log(foo);
var foo = function () {
    return 10;
};
// Output: undefined
*/


console.log(foo());
function foo() {
    return 20;
}
