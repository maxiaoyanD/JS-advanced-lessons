/**
 * 2019/3/31
 */
//如何避免全局污染，使用IIFE函数立即执行表达式
(function(){ //IIFE star
    var x = 20; // x仅在次函数内有
})();        //IIFE end

function nameSpace(){
    var x = 20;
}

nameSpace();

//由于ES5没有块作用域，即使写成如下形式依然有问题
if(true){
    var x = 30;
}