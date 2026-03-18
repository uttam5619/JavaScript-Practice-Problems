/*
var a = 10;
function test() {
    console.log(this.a);
}
test();
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
var a = 10;
const obj = {
    a: 20,
    test: function () {
        console.log(this.a);
    }
};
const fn = obj.test;
fn();
*/

/*
var a = 10;
const obj = {
    a: 20,
    test: function () {
        setTimeout(function () {
            console.log(this.a);
        }, 0);
    }
};
obj.test();
*/

