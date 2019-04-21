/**
 * 2019/4/21
 */
var i = new String("str");
var h = new Number(1);
var g = new Boolean(true);
var j = new Object({name:"hh"});
var k = new Array([1,2,3]);
var l = new Date();
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");

//typeof
console.log(typeof Array);//Function
console.log(typeof Function);//Function
console.log(typeof Date);//Function
console.log(typeof Number);//function
console.log(typeof String);//Function
console.log(typeof Boolean);//Function
console.log(typeof Math);//Object
console.log(typeof JSON);//Object

// 左边instanceof 右边：
/** 含义：
 * 1，左边是右边的一个实例吗
 * 2，左边的__proto__原型链上是否包含右边的prototype
*/
/**
 * 对象 instanceof 构造函数
 * 1，判断对象能否使用该构造函数实例化得到
 * 2，判断对象的原型链上能否找到该构造函数的原型
 * 对象.__proto__.__proto__.(长度不确定)==构造函数.prototype
 */
/*任何对象 instanceof Object都得true，
 *因为Object是所有对象的原型
 */
console.log(Object instanceof Function);//true
console.log(Object instanceof Object);//true
console.log(Boolean instanceof Function);//true
console.log(Boolean instanceof Object);//true
console.log(String instanceof Function);//true
console.log(String instanceof Object);//true
console.log(Number instanceof Function);//true
console.log(Number instanceof Object);//true
console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true

