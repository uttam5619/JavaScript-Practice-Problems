
/*
function outer() {
    let x = 10;
    return function inner() {
        console.log(x);
        var x = 20;
    };
}
const fn = outer();
fn();
*/

/*
let count = 0;
(function immediate() {
    if (count === 0) {
        let count = 1;
        console.log(count);
    }
    console.log(count);
})();
*/