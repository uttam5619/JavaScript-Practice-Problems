/*

function deno(){
    let x=10;
    function test(){
        console.log(x);
    }
    return test
}

const fn =deno
fn()()
*/


/*
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
*/


/*
console.log(`-----------------`);
for (var i = 1; i <= 3; i++) {
  (function (let j=0) {
    setTimeout(() => console.log(j), 100);
  })(j);
}
*/


/*
function createFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}
const funcs = createFunctions();
funcs[0]();
funcs[1]();
funcs[2]();
*/


/*
function createFunctions() {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(() => console.log(i));
  }
  return arr;
}
const funcs = createFunctions();
funcs[2]();
*/


/*
let x = 10;
function outer() {
  return function inner() {
    console.log(x);
  };
}
x = 30;
outer()();
*/


/*
function outer() {
  let x = 10;
  return function inner(y) {
    console.log(x + y);
  };
}
const fn = outer();
fn(5);
*/


/*
function outer() {
  let a = 1;
  return function () {
    let a = 2;
    console.log(a);
  };
}
outer()();
*/


/*
function outer() {
  let x = 5;
  setTimeout(function () {
    console.log(x);
  }, 1000);
}
outer();
*/


/*
function outer() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
outer();
*/

  