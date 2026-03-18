
/*
//poblem 1
setTimeout(() => {
  console.log('T1');
  Promise.resolve().then(() => console.log('P1'));
}, 0);
Promise.resolve().then(() => {
  console.log('P2');
  setTimeout(() => console.log('T2'), 0);
});
//output: P2 T1 P1 T2
*/

/*
//problem 2
Promise.resolve().then(() => {
  console.log('P1');
  Promise.resolve().then(() => console.log('P2'));
});
setTimeout(() => console.log('T1'), 0);
//output: P1 P2 T1
*/

/*
//problem 3
setTimeout(() => {
  console.log('T1');
  setTimeout(() => console.log('T2'), 0);
}, 0);
Promise.resolve().then(() => console.log('P1'));
//Output: P1 T1 T2
*/

/*
//problem 4
Promise.resolve().then(() => {
  console.log('P1');
  setTimeout(() => console.log('T1'), 0);
});
Promise.resolve().then(() => console.log('P2'));
// Output: P1 P2 T1
*/

/*
//problem 5
setTimeout(() => {
  console.log('T1');
  Promise.resolve().then(() => console.log('P1'));
}, 0);
setTimeout(() => console.log('T2'), 0);
// Output: T1 P1 T2


/*
//problem 6
Promise.resolve().then(() => {
  console.log('P1');
  setTimeout(() => {
    console.log('T1');
    Promise.resolve().then(() => console.log('P2'));
  }, 0);
});
//Output: P1 T1 P2
*/

/*
//problem 7
setTimeout(() => {
  console.log('T1');
  Promise.resolve().then(() => console.log('P1'));
}, 0);
Promise.resolve().then(() => console.log('P2'));
//Output: P2 T1 P1
*/

/*
//Problem 8
Promise.resolve().then(() => {
  console.log('P1');
  Promise.resolve().then(() => {
    console.log('P2');
    setTimeout(() => console.log('T1'), 0);
  });
});
setTimeout(() => console.log('T2'), 0);
//Output: P1 P2 T2 T1
*/

/*
//Problem 9
setTimeout(() => {
  console.log('T1');
}, 0);
Promise.resolve().then(() => {
  console.log('P1');
  setTimeout(() => console.log('T2'), 0);
});
//Output: P1 T1 T2
*/

/*
//Problem 10
Promise.resolve().then(() => {
  console.log('P1');
  setTimeout(() => {
    console.log('T1');
  }, 0);
});
setTimeout(() => {
  console.log('T2');
  Promise.resolve().then(() => console.log('P2'));
}, 0);
//Output P1 T2 P2 T1
*/

/*
//Problem 11
setTimeout(() => {
  console.log('T1');
  Promise.resolve().then(() => {
    console.log('P1');
    setTimeout(() => console.log('T2'), 0);
  });
}, 0);
//Output: T1 P1 T2
*/

/*
//problem 12
Promise.resolve().then(() => {
  console.log('P1');
});
Promise.resolve().then(() => {
  console.log('P2');
  setTimeout(() => console.log('T1'), 0);
});
//Output: P1 P2 T1
*/

/*
//problem 13
setTimeout(() => {
  console.log('T1');
}, 0);
setTimeout(() => {
  console.log('T2');
  Promise.resolve().then(() => console.log('P1'));
}, 0);
//Output: T1 T2 P1
*/

/*
//Problem 14
Promise.resolve().then(() => {
  console.log('P1');
  setTimeout(() => console.log('T1'), 0);
});
setTimeout(() => {
  console.log('T2');
}, 0);
Promise.resolve().then(() => console.log('P2'));
//Output: P1 P2 T2 T1
*/
