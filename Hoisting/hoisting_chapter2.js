/*
let a = 5;
function test(a = b, b = a) {
    console.log(a, b);
}
test();
//Output: - Refrence error , can not access b before initialization.
// here a and b both are declared in parameter scope, so when we try to access b it will give refrence error.
*/

// to be solved

/*
console.log(typeof Person);
class Person {}
console.log(typeof Person);
*/

/*
var x = 1;
{
    function x() {}
    x = 2;
}
console.log(typeof x);
*/

/*
let a = 1;
function test() {
    let a = 2;
    setTimeout(() => {
        console.log(a);
    }, 0);
    a = 3;
}
test();
*/

/*
function Foo() {}
Foo.prototype.get = function () {
    return this.value;
};
var f = new Foo();
f.value = 10;
Foo.prototype = {
    get: function () {
        return 20;
    }
};
console.log(f.get());
*/

/*
var a = 10;
const obj = {
    a: 20,
    foo: function () {
        return () => {
            console.log(this.a);
        };
    }
};
obj.foo()();
*/

/*
console.log(a);
Promise.resolve().then(() => {
    console.log(a);
});
setTimeout(() => {
    console.log(a);
}, 0);
var a = 5;
*/

/*
function test(x = y) {
    let y = 10;
    console.log(x);
}
test();
*/

/*
let { a = b, b = 10 } = {};
console.log(a, b);
*/

/*
function test() {
    var a = 1;
    eval("var a = 2");
    console.log(a);
}
test();
*/


/*
function test(a) {
    console.log(a);
    var a = 20;
    console.log(a);
    console.log(arguments[0]);
}
test(10);
*/

/*
let arr = [];
for (let i = 0; i < 3; i++) {
    arr.push(() => i);
}
console.log(arr[0](), arr[1](), arr[2]());
*/

/*
var arr = [];
for (var i = 0; i < 3; i++) {
    arr.push((function(i) {
        return function() {
            return i;
        };
    })(i));
}
console.log(arr[0](), arr[1](), arr[2]());
*/

/*
function foo() {
    return 1;
}
var foo = 2;
function foo() {
    return 3;
}
console.log(typeof foo, foo);
*/

/*
"use strict";
var a = 10;
function test() {
    console.log(this.a);
}
test();
*/


/*
let a = 1;
function outer() {
    console.log(a);
    let a = 2;
    function inner() {
        console.log(a);
    }
    inner();
}
outer();
*/


/*
for (var i = 0; i < 2; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}
console.log(i);
*/


/*
var foo = function bar() {
    console.log(typeof bar);
};
foo();
console.log(typeof bar);
*/

/*
var a = 10;
(function () {
    console.log(delete a);
    console.log(a);
})();
*/

/*
var a = 1;
function test() {
    console.log(a);
    var a = 2;
    function a() {}
    a = 3;
    return function () {
        console.log(a);
    };
}
var fn = test();
a = 4;
fn();
*/

