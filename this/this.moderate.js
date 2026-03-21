/*
const obj = {
    a: 1,
    b: {
        a: 2,
        func: function() {
            return this.a;
        }
    }
};
console.log(obj.b.func());
//Output: - 1
// Here . the func function is called by obj.b oject , so in the ececution context of func 
// the value of this will be obj.
*/


/*
const obj = {
    name: "Uttam",
    greet() {
      const inner = () => {
        console.log(this.name);
      };
      inner();
    }
};
obj.greet();
//Output: - Uttam
*/

/*
const obj = {
  name: "Uttam",
  greet: () => {
    console.log(this);
  }
};

obj.greet();
//Output - globalObject
*/


/*
function test() {
  console.log(this.a);
}
const obj = { a: 10 };
const bound = test.bind(obj);
const newFn = bound.bind({ a: 20 });
newFn();
//Output:- 10
*/


/*
function Test() {
  this.a = 100;
}
const obj = { a: 50 };
const bound = Test.bind(obj);
const t = new bound();
console.log(t.a);
//Output: - 100
*/

/*
function Test() {
  this.a = 10;

  const fn = () => {
    console.log(this.a);
  };

  fn();
}
new Test();
//Output:- 10
*/


/*
const obj = {
  a: 10,
  inner: {
    a: 20,
    test() {
      console.log(this.a);
    }
  }
};
const fn = obj.inner.test;
fn();
//Output:- undefined
*/

/*
const obj = {
  a: 10,
  test() {
    return function () {
      console.log(this.a);
      console.log(this)
    };
  }
};

obj.test()();
//Output:- undefined, global
*/

/*
const obj = {
  a: 10,
  test: () => {
    return function () {
      console.log(this.a);
      console.log(this)
    };
  }
};

obj.test()();
//Output:- undefined, global
*/
