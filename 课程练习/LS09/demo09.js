/**
 * 2019/3/24
 * 10、JS作用域及执行上下文
 */
//词法作用域 与调用形式无关，调用位置无关
var name = 'jack';
function echo(){
    console.log(name);
}
function foo(){
    var name = 'lili';
    echo();
}
foo();//'jack'

//全局变量和局部变量
var x="outside f1";
var f1 = function(){
    var x = 'inside f1';//没有此行两次输出全是outside
    //加上此行f1内的输出是inside
    console.log(x);
};
f1();
console.log(x);//这里一直是outside

//若函数内未加var，则相当于常见全局变量
var f2 = function(){
    var y = '局部';
    //y = '全局';
    console.log(y);
}
f2();
console.log(x);//全局
//若函数内有var此行会报错

//ES5无块作用域
if(true){
    var z = 23;
}
console.log(z);//正常输出23

if(true){
    (function(){ //IIFE start
        var z = 23;
    }());        //IIFE end
}
console.log(z);// 报错