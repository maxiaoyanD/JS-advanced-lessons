/**
 * 2019/06/01
 */
//不用解构赋值方式定义变量
var a=1;b=2;c=3;
console.log(a,b,c);

//用解构赋值方式定义变量
//part 1111111111111111数组的解构赋值
var [a,b,c]=[1,2,3];
console.log(a,b,c);//1 2 3

//let 也支持解构赋值
let [foo,[[bar],baz]]=[1,[[2],3]];
console.log(foo,bar,baz);//1 2 3

let [, , xx]=["hh","ll","kk"];
console.log(xx);//kk

let [x,,y]=[1,2,3];
console.log(x,y);//1 3

let [head,...tail]=[1,2,3,4];
console.log(head,tail);//1 [2,3,4]

let [d,e,...f] = ['a'];
console.log(d,e,f);//a undefined []

//注意：如果不匹配成功的变量为undefined，...跟的变量未[空数组]
var [doo2] = [];
var [bar,fee2]=[1];
console.log(doo2,fee2);//undefined undefined

//不完全解构的情况
let [x2,y2]=[1,2,3];
console.log(x2,y2);//1 2 

let [a2,[b2],d2]=[1,[2,3],4];
console.log(a2,b2,d2);//1  2 4

//解构赋值中的默认值
var [foo3 = true] = [];//foo 默认为 true
[x3,y3='b'] = ['a'];//x3=a, y3=b
[x4,y4='c'] = ['a',undefined];//x4=a , y4=c

//ES6内部使用严格相等运算符(===),判断一个位置是否有值
//所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
var [x5=1] = [undefined];// x5=1
var [x6=1] = [null];//x6为null

function f2(){
    return 2;
}
let [x7 = f2()] = [1];
console.log(x7);//1

//默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
//let [m4 = n4, n4 = 1] = []; // ReferenceError
console.log(m1,n1,m2,n2,m3,n3);

let a = [];
let b = [2,3,4];
[a[0],a[1],a[2]]=b;
console.log(a==b);//false
console.log(a);//2 3 4

let a = [];
let b=[2,3,4];
a = b;
console.log(a == b);//true