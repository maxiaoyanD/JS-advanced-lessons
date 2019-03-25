/**
 *  2019/3/24
 *  JS预解析
**/
//part 1
console.log(a); //undefined
var a=1;
console.log(a);//1
//在解析器中等价于
var a;
console.log(a);
a = 1;
console.log(a);

//思考如下代码输出什么 值类型
console.log(a,b); //undefined undefined
var b = 23;
console.log(a,b);//undefined 23
var a = b;
console.log(a,b);//23 23

//思考如下代码输出什么 引用类型
//变量的值改变不会相互影响，函数的值改变会影响
console.log(obj1,obj2);//undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//x:23  undefined
var obj2 = obj1;
console.log(obj1,obj2);//x:23  x:23
obj2.x =25;
console.log(obj1,obj2);//x:25  x:25

//Part 2
//函数或变量重复定义相当于覆盖
foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

//上边代码等价如下 解析器眼中的代码
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2

//Part 3
foo(); //报错
var foo = function(){
    console.log("foo");
}

//思考以下代码是否会报错，写出这段代码的等价形式
console.log(foo);//输出什么
var foo = function(){
    console.log("foo");
};
foo();//是否会报错
//等价于
var foo;
console.log(foo); //undefined
foo = function(){
    console.log("foo");
};
foo();//foo

//Part 4
AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
}
AA();
//以上代码等价于
function AA(){
    console.log("AA_1");
}
var AA;

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();
