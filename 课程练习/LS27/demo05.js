/**
 * 2019/5/31
 */
const PI = 3.1415926;
console.log(PI);
//PI=3.14; 常量再赋值 报错

//声明时必须赋值，一旦声明必须立即初始化
const foo;//会报错
const foo=23;//可以

//const 作用域同let
if(true){
    const max=10;
    console.log(max);//10
}
console.log(max);//报错

//const 除了声明常量外，也常用来声明不变的函数
const fee=function(){

};

//const指向的对象引用不可变，但其属性或元素(如果是数组对象的话)是可变的
const a=[];
a.push(123,25,8);//ok
a.length = 1;//ok
a = "str"//报错，因为a是const其元素或属性可改，
//但其引用不能修改类似于 const指针
