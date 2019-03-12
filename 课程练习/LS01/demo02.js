/*****************2019/03/12 **************/

//demo01中定义，demo02中调用，尽量避免全局方法
// function max(a,b){
//     return a>b?a:b;
// }
//这是什么东西

//避免滥用全局变量，见demo2.js

var x=10;
document.onclick = function(){
    alert("x= "+x);
}