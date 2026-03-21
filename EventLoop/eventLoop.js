/*
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
//Output :- A D C B
*/


/*
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve()
  .then(() => console.log("C"))
  .then(() => console.log("D"));
console.log("E");
//Output:- A E C D B
*/


/*
console.log("start");
setTimeout(() => {
  console.log("timeout");
}, 0);
Promise.resolve().then(() => {
  console.log("promise1");
  return Promise.resolve();
}).then(() => {
  console.log("promise2");
});
console.log("end");
//Output:- start end timeout promise1 promise2
*/

/*
console.log("A");
setTimeout(() => {
  console.log("B");
  Promise.resolve().then(() => console.log("C"));
}, 0);
Promise.resolve().then(() => console.log("D"));
console.log("E");
//Output :- A E D B C
*/

/*
console.log("A");
async function foo() {
  console.log("B");
  await Promise.resolve();
  console.log("C");
}
foo();
console.log("D");
//Output: - A B D C
*/


/*
console.log("A");
async function foo() {
  console.log("B");
  await Promise.resolve();
  console.log("C");
}
async function bar() {
  console.log("D");
  await foo();
  console.log("E");
}
bar();
console.log("F");
//Output:- A D B F C E
*/


/*
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => {
  console.log("C");
  setTimeout(() => console.log("D"), 0);
});
console.log("E");
//Output:- A E C B D
*/


/*
console.log("start");
setTimeout(() => console.log("timeout1"), 0);
Promise.resolve().then(() => {
  console.log("promise1");
  setTimeout(() => console.log("timeout2"), 0);
})
Promise.resolve().then(() => console.log("promise2"));
console.log("end");
//Outupt :- start end promise1 promise2 timeout1 timeout2
*/


/*
setTimeout(() => console.log("timeout"));
Promise.resolve().then(() => {
  console.log("promise1");
  return Promise.resolve();
}).then(() => {
  console.log("promise2");
})
console.log("end");
//Output:- end promise1 promise2 timeout
*/


function loop() {
    Promise.resolve().then(loop);
}
loop();  
setTimeout(() => console.log("timeout"), 0);

console.log('hello')