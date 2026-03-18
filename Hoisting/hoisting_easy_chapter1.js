/*
console.log(a);
var a = 10;
(function () {
    console.log(a);
    var a = 20;
})();

//Output:- undefined,undefined
*/


/*
foo();
var foo = function () {
    console.log("Hello");
};
function foo() {
    console.log("World");
}
// Output:- World
*/


/*
function test() {
    console.log(a);
    if (false) {
        var a = 10;
    }
    console.log(a)
}
test();
//Output:- undefined,undefined
*/


/*
var a = 1;
function outer() {
    console.log(a);
    var a = 2;

    function inner() {
        console.log(a);
    }

    inner();
}
outer();
//Output:- undefined 2
*/


/*
console.log(a);
var a = 10;
function a() {}
console.log(a)
//Output:- function, 10
*/

/*
console.log(typeof a);
var a = 10;
*/

/*
function test() {
    console.log(a);
    let a = 10;
}
test();
//Output:- Refrence Error , because a is in tempporal dead zone.
*/

/*
var a = 5;

function test() {
    console.log(a);
    a = 10;
    console.log(a);
}
test();
//Output:-5,10
*/

/*
console.log(a);

function a() {}
var a = 10;

console.log(a);
//Output:- function, 10
*/

/*
(function () {
    console.log(a);
    var a = 10;

    (function () {
        console.log(a);
        var a = 20;
    })();
})();
//Output:- undefined,undefined
*/

/*
let a = 10;

{
    console.log(a);
    let a = 20;
}
    //Output:- Refrence Error because a is in Temporal Dead Zone
*/

/*
var a = 1;

function test() {
    console.log(a);
    a = 2;
    var a;
    console.log(a);
}
test();
//Output:- undefined ,2
*/

/*
console.log(a);

var a = 10;

(function () {
    console.log(a);
    a = 20;
    console.log(a);
    var a = 30;
    console.log(a);
})();
//Output:- undefined,undefined,20,30
*/

