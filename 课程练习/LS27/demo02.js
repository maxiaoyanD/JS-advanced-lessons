/**
 * 2019/5/31
 */
//变量共享问题
for(var i=0;i<3;i++){
    setTimeout(function(){
        console.log(new Date(),i);//这里输出出的i一直都是3
    },i*1000);
}
console.log("i:",i);//3

//通过IIFE解决变量共享问题
for(var i=0;i<3;i++){
    (function(j){
        setTimeout(function(){
            console.log(new Date(),j);// 0 1 2
        },j*1000)
    }(i))
}