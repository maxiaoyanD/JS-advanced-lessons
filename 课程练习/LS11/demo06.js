/**
 * 2019/3/30
 * IIFE及使用方法
 */

 //立即执行表达式 常见形式
 (function foo(x,y){
     console.log(x>y?x:y);
 }(2,3));

 (function foo(x,y){//可以没有函数名
    console.log(x>y?x:y);
})(2,3);

//注意：IIFE是表达式，要注意使用分号结尾，否则可能出现错误
(function(){
    console.log("111");
})();//没有分号的话会报错
(function(){
    console.log("222");
})()

//其他形式的IIFE 与运算结合的算法
var i = function(){
    return 10;
}(); //i值是10

true && function(a,b){
    return a>b?a:b;
}(5,7);//7

!function(x,y){
    return x==y?true:false;
    //如果换为===则为true
}("5",5);//false

//思考
!function(){
    return 2;
}();//false

!function(){
    return 0;
}();//ture