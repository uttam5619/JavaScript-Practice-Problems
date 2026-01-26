
/*
let x = 10;

function outer() {
  let x = 20;
  return function inner() {
    console.log(x);
  };
}

const fn = outer();
fn();
// output: 20
*/


/*
function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const fn1 = outer();
fn1();
fn1();
// output: 1, 2
*/


/*
function outer() {
  let x = 1;
  return [
    () => console.log(++x),
    () => console.log(x++)
  ];
}

const [a, b] = outer();
a();
b();
a();
// Output: 2,2,4
*/


/*
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
Output: 3,3,3
*/


/*
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Output: 0,1,2
*/


/*
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 0);
  })(i);
}
// Output: 0,1,2
*/

/*
function a() {
  let x = 1;
  return function b() {
    let y = 2;
    return function c() {
      console.log(x + y);
    };
  };
}

a()()();
// Output: 3
*/


/*
function outer(x) {
    console.log('The value of x is: ' + x);
  return function inner(y) {
    console.log('The value of y is: ' + y);
    console.log(x + y);
  };
}

outer(5)(10);
//Output: 15
*/


/*
let x = 10;

function outer() {
  return function () {
    console.log(x);
  };
}

const fn = outer();
x = 20;
fn();
// output: 20
*/

/*
function outer() {
  console.log(x);
  let x = 10;
}

outer();
// Output: ReferenceError: Cannot access 'x' before initialization
*/


/*
function outer() {
  return () => console.log(x);
  let x = 10;
}

outer()();
// Output: ReferenceError: Cannot access 'x' before initialization
*/



function outer(x) {
  return function (y = x) {
    let x = 20;
    console.log(y);
  };
}

outer(10)();




