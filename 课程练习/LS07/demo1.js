/**
 * 2019/3/27
 * 函数定义
 */
//1、函数声明方式
function max(a,b){
    return a>b?a:b;
}
max(2,3);

//2、函数表达式方式 
//等号右侧可以是匿名函数也可以是非匿名函数
//注意：函数调用不可以放在函数声明之上
var max = function(a,b){
    return a>b?a:b;
}
max(2,3);

//3、用function构造函数
//function实例化函数，执行效率相对较低，但是更加灵活
// var max = new Function('a','b','renturn a>b?a:b');
// max(1,2);

//非匿名函数便于调用栈追踪 测试使用匿名和非匿名函数的区别
var foo = function max(a,b){
    console.trace();
    return console.log(a>b?a:b);
}
foo(2,3);

foo = function min(a,b){
    console.trace();
    return console.log(a>b?a:b);
}
foo(1,2);

