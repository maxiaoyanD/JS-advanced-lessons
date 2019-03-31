/**
 * 2019/3/30
 */

 //文件内的变量污染问题，尤其是异步执行的情况下
var userId = 123;
document.onclick = function(){
    console.log("userId = ",userId);
    //123
};

//很多代码之后看不见上面代码了
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());
//userId变为234，造成污染

//如何避免文件之间的全局污染
//使用IIFE函数立即执行表达式
(function(){ //IIFE 开始
    var x =10;
    document.onclick = function(){
        console.log("x=",x);
    }
})();       //IIFE 结束