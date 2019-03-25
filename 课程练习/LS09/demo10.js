/**
 * 2019/3/24
 */
if(true){
    var i = 0;//此处为全局变量
}
function foo(){
    console.log("j:",j);//undefinded
    var j = 10;//作用域仅限于foo函数内
    console.log("j:",j);//10
}
foo();
console.log("i",i)//0
console.log("j",j);//报错

//上边代码等价于
var i;
if(true){
    i = 0;
}

function foo(){
    var j;
    console.log("j:",j);//undefined
    j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错