/** 
 * 2019/3/27
 * 变量参数问题
 */
//实参大于形参
//通过函数对象的属性arguments获得所有实参、类数组对象
function test(){
    console.log(arguments);
    console.log(test.arguments == arguments.arguments);//false
    console.log(arguments.length);//4
    console.log(typeof arguments);//Object
    console.log(arguments instanceof Array);//false
    console.log(arguments instanceof Object);//true 
    console.log(Array.prototype.slice.call(arguments));//["Hello",",","World","!"]
    var s = "";
    for(var i=0;i<arguments.length;i++){
        s += arguments[i];
    }
    return s;
}
test("Hello",",","World","!");

//实参小于形参 
//少的参数值为undefined，可以引用||来给出默认值

var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
}
console.log(sum(1,2,3))//6
console.log(sum(1,2));//8
console.log(sum(1));//10