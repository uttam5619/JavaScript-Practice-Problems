/*
console.log(foo);
var foo = 1;
function foo() {
    return 2;
}
console.log(foo);

//Output:- function, 1
*/

/*
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}

//Output:- 0,1,2
// the loop will get execute first and then all setTimeOut will get executed.
// each callback in setTImeOut will have its own binding of let in its lexical scope
*/

/*
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
Output:- 3,3,3
// the loop will get execute first and then all setTimeOut will get executed.
//Each callback will look for the value of the variable i in its lexical scope and ultimaltely the JS will find the value of i in the global scope
*/

/*
function test() {
    console.log(a);
    var a = (b = 10);
    console.log(a)
}
test();
console.log(b);

//Output:- undefined, 10,10
//here b will get declared in the global scope and the assignment expression return the value of b.
*/

/*
obj.foo();
obj.bar();
var obj = {
    a: 10,
    foo: function () {
        console.log(this.a);
    },
    bar: () => {
        console.log(this.a);
    }
};
//Output:- type error.
// can noot read properties of type undefined
// object obj with var get hoisted with undefined, so obj.foo() in nothing but undefined.foo()
*/

/*
function test(x, y = () => x) {
    var x = 2;
    console.log(y());
    console.log(x)
}
test(3);
*/

/*
function test(a = b, b = 2) {
    console.log(a, b);
}
test();
//Output:- Can not accesss b before initialization.
*/

/*
var x = 1;
function test() {
    console.log(x);
    function x() {}
    var x = 10;
    console.log(x);
}
test();
//Output:- 10
*/

/*
var x = 5;
(function () {
    console.log(x);
    var x = 10;
    console.log(x);
})();
//Output:-undefined,10
*/

/*
let a = 1;
{
    console.log(a);
    var a = 2;
}
console.log(a);
//Output:- Syntax Error, identifier a has been already declared.
*/

/*
var a = 10;
function test() {
    console.log(this.a);
    var a = 20;
}
test();
//Output:- undefined
*/

/*
console.log(a);
setTimeout(() => {
    console.log(a);
}, 0);
var a = 10;
//Output:- undefined ,10
*/

/*
console.log(foo())
function foo() {
    return 1;
}
var foo = function () {
    return 2;
};
console.log(foo());
// Output:- 1,2
*/

/*
{
    function foo() { return 1; }
    var foo = 2;
}

console.log(typeof foo);
*/

/*
function outer(y) {
    return function (x = y) {
      console.log(x)
      let x = 20;
      console.log(x+y);
    };
}  
outer(10)();
*/
  