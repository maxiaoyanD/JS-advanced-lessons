/**
 * 2019/3/31
 * 闭包的常见形式
 */

 //Part 11111

 var tmp = 100;
 //注意：词法作用域，形成的闭包是否包含此行的tmp
 function foo(x){
     var tmp = 3;
     //注意：词法作用域，
     //思考：若屏蔽此行，会输出什么？
     //foo之外的天麻片是否为闭包的一部分
     return function(y){
         console.log(x+y+(++tmp));
     }
 }
 var fee = foo(2);//fee形成一个闭包
 fee(10);//16
 fee(10);//17
 fee(10);//18

 //闭包嵌套，扩展知识（了解即可）
 //思考下述代码中存在几个闭包，设置断点调试
 function f1(m){
    var z = 100;
    function f2(x){
        return function(y){
            console.log(x+y+(++z));
            //设置断点，查看有几个闭包
        }
     }
     return f2(m);
 }
 var f3 = f1(2);
 f3(10);
 f3(10);
