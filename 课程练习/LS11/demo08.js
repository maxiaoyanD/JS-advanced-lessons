/**
 * 2019/3/31
 */
//ES5作用域 与 变量共享问题
//查看Scope窗口中getNumFuncs中每个函数的内部属性
//[[Scope]]中的第0个元素闭包中的变量，
//看是否存在共享问题
function f(){
    var getNumFuncs = [];
    for(var i = 0;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tem = f();
tem[3](); //tem[0],tem[1].....tem[9]都是10

//以上代码等价于  存在变量共享问题
 function f(){
     var arr = [];
     var i=0;
     for(;i<10;i++){
         arr[i] = function(){
             return i;
         };
     }
     return  arr;
 }
 var t = f();
 t[4]();//9

 //IIFE 解决变量共享问题
 function f(){
     var brr = [];
     for(var  i =0;i<10;i++){
         (function(j){
            brr[j] = function(){
                return j;
            };
         })(i);
     }
     return brr;
 }
 var a = f();
 a[5](); //5 


 //局部变量的案例
 function f(){
     var crr = [];
     var j ;
     for(var i=0;i<10;i++){
         j = i;
         crr[i] = function(){
             return j;
         };
     }
     return crr;
 }
 var tem = f();
 tem[5]();//9