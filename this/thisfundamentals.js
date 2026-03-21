/*
const obj = {
    a: 10,
    test() {
      console.log(this.a);
    }
};
obj.test();
//Output: - 10
*/


/*
const obj = {
    a: 10,
    test() {
      console.log(this.a);
    }
};
const fn = obj.test;
fn()
//Output: - undefined
*/


/*
const obj = {
    a: 10,
    test() {
      console.log(this.a);
    }
};
const fn = obj.test();
console.log(fn)
// Output : - 10 undefined
*/

/*
const obj = {
    a: 10,
    test() {
        function inner() {
            console.log(this.a);
        }
        inner();
    }
};
obj.test();
//Output:- undefined
*/


/*
function test() {
    console.log(this.a);
}
const obj = { a: 20 };
test.call(obj);
//Output:- 20
*/


/*
const obj1 = {
    a: 10,
    test() {
      console.log(this.a);
    }
};
const obj2 = { a: 50 };
obj1.test.call(obj2);
//Output:- 50
*/

/*
function test() {
    console.log(this.a);
}
const obj1 = { a: 10 };
const obj2 = { a: 20 };
const bound = test.bind(obj1);
bound.call(obj2);
//Output:- 10
*/



/*
// important question
function Test() {
    this.a = 100;
}
const obj = { a: 50 };
const bound = Test.bind(obj);
const t = new bound();
console.log(t.a);
//Output: - 50

// EXPLANATION
// this should show undefined because new binding has higher priority than explicit binding.
// when we are calling const bound = Test.bind(obj) this sets the Test function as
BoundFunction = {
  [[TargetFunction]]: Test,
  [[BoundThis]]: obj
}
// but every thing changes when we execute 'const t = new bound()'
// const t = new bound() do following these things 
// 1. Create a new object as t = {}
// 2. Set prototype as t.__proto__ = Test.prototype
// 3. Call function with this = t as Test.call(t)
// and this will show the ooutput as 50
*/


function Test() {
    this.a = 100;
    return { a: 200 };
}

const bound = Test.bind({});
const t = new bound();

console.log(t.a);
//Output:- 200
//If constructor returns object → it overrides this

/* 
// tto be viewed
const obj = {
    a: 10,
    test() {
      return () => {
        return function () {
          console.log(this.a);
        };
      };
    }
  };
  
  const fn = obj.test()();
  fn.call({ a: 50 });
*/

/*
function Test() {
    this.a = 10;
    return { a: 20 };
}
const t = new Test();
console.log(t.a);
*/


