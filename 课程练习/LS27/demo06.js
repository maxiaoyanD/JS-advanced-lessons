/**
 * 2019/5/31
 */
//ES6中 let和const 不进行变量提升特性
//1、var声明变量
console.log(a);//undefined
var a=1;
console.log(a);//1

//预解析 上述代码等价于
var  a;
console.log(a);
a=1;
console.log(a);

//思考下述代码输出什么？理解ES5中，是否有块作用域，是否有函数作用域，如何理解下述代码
var temp =  new Date();
function f(){
    console.log(temp);//undefined
    if(false){
        var temp="Hi!";
    }
}
f();
//ES5没有块级作用域

//let和const不存在变量提升
console.log(a);//报错
let a = 2;
console.log(a);