/**
 * 2019/5/31
 */
//let和const的暂时性死区特性
//只要块级作用域内存在let，他所声明的变量就“绑定”在这个区域，不再受外部影响
//let对这个块从一开始就形成了封闭的作用域，凡是在声明之前使用该变量，就会报错
//养成良好习惯，使用变量前声明

typeof b;//报错 ReferenceError 需要使用前定义
let b;//有没有这一行上一行都会报错

var tmp = 123;
if(true){
    tmp="abc";
    let tmp;//会报错，换成var不会报错，let tmp在上一行也不会报错
}

//let const 不能重复声明
let abc;
let abc;//报错

function foo1(){
    let x;
    var x;
}
foo1();//报错，x重复定义

function foo2(){
    let x;
    let x;
}
foo2();//报错 x重复定义