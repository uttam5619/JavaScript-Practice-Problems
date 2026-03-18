

/*
console.log(this);
setTimeout(function () {
  console.log(this);
}, 0);
Promise.resolve().then(function () {
  console.log(this);
});
//Output: Global, Global, Global
*/

/*
const obj = {
  a: 10,
  fn() {
    Promise.resolve().then(function () {
      console.log(this.a);
    });
    Promise.resolve().then(() => {
      console.log(this.a);
    });
  }
};
obj.fn();
//Output: undefined, 10
*/

/*
var x = 1;
function foo() {
  console.log(x);
}
setTimeout(() => {
  var x = 2;
  foo();
}, 0);
//Output: 1
*/

/*
let x = 1;
setTimeout(() => {
  console.log(x);
}, 0);
Promise.resolve().then(() => {
  x = 2;
});
//Output: 2
*/

/*
async function f() {
  console.log('A');
  await Promise.resolve();
  console.log('B');
}
setTimeout(() => console.log('C'), 0);
f();
console.log('D');

```
Expected Output: A B D C
Actual Output: A D B C
Explanation: 
When f() is called, it logs 'A' immediately.
Then it awaits a resolved Promise, which causes the function to pause execution.
Meanwhile, the setTimeout callback and console.log('D') are executed in the same tick.
After that, the function resumes and logs 'B'.
Finally, the setTimeout callback logs 'C'.
```

*/