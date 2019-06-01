/**
 * 2019/06/01
 */
//1、交换变量
var [x,y] = ["a","b"];
[x,y] = [y,x]
console.log(x,y);//b a

//2、从函数返回多个值
// 函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。
// 有了解构赋值，取出这些值就非常方便

//返回一个数组
function example(){
    return [1,2,3];
}
var [a,b,c] = example();

//返回一个对象，解构所有属性
function exo(){
    return {
        foo:1,
        bar:2
    };
}
var {foo,bar} = exo();
console.log(foo,bar);//1 2 

//3、函数参数的定义
//解构赋值可以方便地将一组参数与变量名对应起来。
// 参数是一组有次序的值
function f([x, y, z]) {
    console.log(x);
    console.log(y);
    console.log(z);
}
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) {
    console.log(x);
    console.log(y);
    console.log(z);
}
f({z: 3, y: 2, x: 1});