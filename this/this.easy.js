/*
const obj = {
  name: 'John',
  greet: function() {
    console.log(this.name);
  }
};

const greetFunc = obj.greet;
greetFunc();
//Output: - undefined
*/


/*
const obj = {
  value: 42,
  getValue: function() {
    return function() {
      return this.value;
    };
  }
};

const func = obj.getValue();
console.log(func());
//Output:- undefined
*/


/*
const obj = {
  value: 42,
  getValue: function() {
    const inner = () => {
      return this.value;
    };
    return inner;
  }
};

const func = obj.getValue();
console.log(func());
//Output:- 42
*/


/*
function Person(name) {
  this.name = name;
  
  setTimeout(function() {
    console.log(this.name);
  }, 100);
}

const person = new Person('Alice');
console.log(person)
//Output:- {name:'Alice'}
undefined
*/


/*
// to be viewed
function foo() {
  console.log(this);
}

const objT = {
  foo: foo.bind(null)
};

objT.foo();
*/


/*
const mod = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = mod.getX;
console.log(unboundGetX());

const boundGetX = unboundGetX.bind(mod);
console.log(boundGetX());
//Output:- undefined, 42
*/


/*
const obj = {
  name: 'Object',
  print: () => {
    console.log(this.name);
  }
};

obj.print();
//Output:- undefined
*/


/*
// to be viewed again
function foo() {
  return () => {
    return () => {
      console.log(this.name);
    };
  };
}

const obj = { name: 'Nested' };
const firstArrow = foo.call(obj);
const secondArrow = firstArrow();
secondArrow();
*/

/*
const obj = {
  name: 'Original',
  logName: function() {
    console.log(this.name);
  }
};

const obj2 = { name: 'Changed' };

setTimeout(obj.logName, 1000);
setTimeout(obj.logName.bind(obj2), 2000);
*/