// 1
const box = { a: 10, b: {c: 100}};
// Object.freeze(box);
// box.a = 100;
// box.b.c = 1000
// 可变是万恶之源
const box1 = box;
// console.log(box)
// box?
const arr = [0, 1];
Object.freeze(arr);
arr[0] = 123;
// console.log(arr)


// 2
const { name: myName } = { name: 'lihua'};
// console.log(myName)

//3
const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return `from cache ${num}`
    }else {
      const r = num + 10;
      cache[num] = r;
      return `calcul ${r}`;
    }
  }
}
// addFunc fa
const addFunc = add();
// console.log(addFunc(10));  // calcul
// console.log(addFunc(10)); // calcul  cache
// console.log(addFunc(2*5));    // from  cache


// 4
const arr4 = ['lihua', 'lilei'];
// 枚举一个对象里面的属性  arr4[0]
// for of  遍历可迭代对象    可迭代对象  Map Set String...
// for in 如果遍历数组会变成下面这种形式，for in 不能遍历数组，只能遍历对象
// {'0': 'lihua','1': 'lilei'}
for(let item1 in arr4) {
  // console.log(item1);
}
for(let item2 of arr4) {
  // console.log(item2)
}

// ###  5  this 的指向
function foo() {
  console.log(this);  // this 的指向window
}

var status = 'global';
var obj = {
  status: 'obj',
  getStatus: function() {
    return this.status;  
  }

}
console.log(obj.getStatus())   // this 指向了obj
var fun = obj.getStatus;
console.log(fun())  // this 指向window
// this 指向一定要等到被调用时才会知道指向哪里，指向取决于调用方式

// call  apply bind   this 绑定
// bind 返回一个  绑定了this 的函数
function bar () {
  console.log(this.name);
}
var obj3 = {
  name: 'obj3_ziyin'
}
var cbar = bar.call(obj3);  // 指定this 的时候还调用了对象
var bbar = bar.bind(obj3);  //  指定this 的时候 返回一个新的函数
console.log(bbar)
// console.log(cbar)

// this和new的关系
function Test() {
  this.name = 'name';
  // this 指向 test
  // 往test 上面添加一个name 属性
}
var test = new Test();
test = {name: 'age'};
// Test里面的this指向test

// this 优先级  new > bind > obj.getStatus() > getStatus()
var bindObj = {
  name: '123'
}
function TestNew() {

  this.age = 20;
}
const BindTestNew = TestNew.bind(bindObj)
let resNew = new BindTestNew();
console.log(bindObj, resNew);


// 6  
// function Foo() {}
// class Foo {

// }
//  只是一个语法糖，背后还是es5

// 7 
let a = Symbol('a')
console.log(a === b)
// 给对象添加属性  不会覆盖之前的属性
var obj = {
  [a]: 'a value',
  [b]: 'b value',
  b: '123'
}
console.log(Object.keys(obj));
// 返回一个对象上可枚举的属性
console.log(a in obj);
console.log(Object.getOwnPropertySymbols(obj));