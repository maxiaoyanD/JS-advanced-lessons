/**
 * 2019/5/31
 */
//使用var 可能存在变量共享问题
for(var i =0;i < 3; i++){
    setTimeout(function(){
        console.log(new Date(),i);
    },i*1000);
}
console.log("i:",i);

//使用let可有效避免变量共享问题
for(let i=0;i<3;i++){
    setTimeout(function(){
        console.log(new Date(),i);//0 1 2
    },i*1000)
}