/**
 * 2019/3/30
 * 参数类型与传递方式（值、引用）
 */

 //值传递
 //实参为基本数据类型时，参数改变不影响实参
 var a = 1;
 function foo(x){
     console.trace("a:",a,"x:",x);//a:1,x:1
     x=2;//step 22222
     console.trace("a:",a,"x:",x);//a:1,x:2
 }
 console.trace("a:",a);//a:1
 foo(a);//step 111111
 console.trace("a:",a);//a:1


 //引用传递
 //实参为引用数据类型时，形参改变影响实参
 var obj = {x:1};
 function fee(o){
     console.trace("obj.x:",obj.x,"o.x",o.x);//1,1
     o.x = 3;
     console.trace("obj.x:",obj.x,"o.x",o.x);//3,3
 }
 console.trace("obj.x:",obj.x);//1
 fee(obj);
 console.trace("obj.x:",obj.x);//3
 
