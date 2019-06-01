/**
 * 2019/5/31
 */
//使用let就可以避免var所带来的问题
let userId=123;
document.onclick=function(){
    console.log("userId=",userId);//会报错
};

let a=2,b=3;
if(a<b){
    let userId=234;
    console.log(userId);//234
}
console.log(userId);//123

//let定义的变量不像var 那样直接作为全局对象的属性
var x=23;
let y=24;
console.log(window.x,window.y);//23 undefined