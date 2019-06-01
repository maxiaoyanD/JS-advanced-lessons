/**
 * 2019/5/31
 * 
 */
//例一 通过var定义变量 ES5中没有块级作用域{}外可以访问{}内元素
{
    var a=23;
}
console.log(a);//23
//因为没有块级作用域，a可以正常输出

//例2
for(var i=0;i<5;i++){
    //do something
}
console.log("i:",i);//i:5 此处i依旧存在

//例3 通过var声明变量，由于没有块作用域，容易造成变量污染
var userId=123;
document.onclick = function(){
    console.log("userId=",userId);
}
//一段代码过后，忘记了前面的userId，容易造成重复定义
var a=2,b=3;
if(a<b){
    var userId=124;
}
console.log(userId);//124

//可以通过IIFE解决上述问题
(function(){
    var a=2,b=3;
    if(a<b){
        var userId=124;
    }
}());
console.log(userId);//123