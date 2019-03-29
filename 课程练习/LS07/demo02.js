/**
 * 2019/3/27
 * 函数调用（4种）
 */
//1、作为普通函数直接调用
//非严格模式下this指代全局变量，严格模式下是undefined
function test1(){
    console.log(this);
}
test1();//window

//思考嵌套的情况下
function test2(){
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();//window
//这里的this指代全局变量

//2、作为方法调用（this指调用方法的对象）
var obj = {
    name:'obj',
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test(); //调用对象的方法输出23

//在普通函数调用，this指向全局对象
//当函数不作为对象的的属性调用时，就相当于普通函数，this指代的是全局对象
//当他作为对象的属性调用时，指该对象
//例一
var x = 45;
var test = function(){
    console.log("输出：",this.x);
}
var obj = {
    x:23
}
obj.test = test;
obj.test();//23
test();//45
//例二
var x = 45;
var obj = {
    x:23,
    test:function(){
        function foo(){
            console.log(this.x);
        } 
        foo();
    }
}
obj.test();

//给obj动态添加方法
var obj ={
    name : 'jsck'
}
var sayHi = function(){
    console.log("Hi,i'm",this.name);
}
obj.sayHi = sayHi;//给对象添加方法
obj.sayHi();//Hi,i'm jack

//思考：若直接调用sayHi();
var name = 'rose';//全局
sayHi();//rose

//思考如下代码 详情参见高阶函数函数章节
var x=55;
var obj=function(){
    name:'hhh'
}
var fun1 = function(){
    return function fn2(){
        return this.x;//若改为return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());//fun2函数 √
console.log(obj.fun3()())//55 √
console.log(obj.fun4())//我以为的结果是55，实际结果是undefined
/**
 * 改为return this
 * console.log(obj.fun3());//fun2函数
 * console.log(obj.fun3()())//window
 * console.log(obj.fun4())//ƒ (){name:'hhh'}
*/

//3、间接调用 通过call()和apply()
//方法.call可以切换调用的对象
//this作为函数对象的call/apply方法的首个参数，移花接木
//实例一 间接调用的对象要和原对象之间，在数据额结构上有对应的相似处，以便不影响调用效果
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//"AA"
objA.foo.call(objB);//BB

//间接调用 实例二 移花接木 吸星大法
var fish = {
    name:"fish",
    swim:function(m,n){
        console.log("i'm" + this.name + "i can swim____",m,n);
    }
};

var bird = {
    name:'polly',
    fly:function(m,n){
        console.log("i'm" + this.name + "i can fly____",m,n);
    }
};

var me ={
    name:'ABC'
};

bird.fly(5,6);//i'mpollyi can fly____ 5 6
fish.swim.call(me,3,4);//i'mABCi can swim____ 3 4
bird.fly.call(me,7,8);//i'mABCi can fly____ 7 8
swim.call(null,1,2);

//很多方法都可以可以通过间接调用大方式来调用，比如很多原型的方法
function test(){
    console.log(Array.prototype.slice.call(arguments));
}
test(1,2,3,4,'5');
 //[1,2,3,4,'5']

 //4、构造函数（this指向构造函数实例化出来的对象）
 function Person(name){
     this.name = name;
 }
 Person.prototype.sayHi = function(){
     console.log("Hi,i'm "+ this.name);
 };
 var p1 = new Person("Jack");
 p1.sayHi();//Hi,i'm Jack