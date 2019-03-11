/******************219/03/11 *****************/
var sum = function(a,b,c){
    b=b||4;
    c=c||5;
    return a+b+c;
};
//未传参的话，形参初始值为undefined，
//undefined转换为布尔类型为false，根据短路原则直接返回值
console.log(sum(1,2,3));
// ==> 1 + 2 + 3 ==> 6
console.log(sum(1,2));
// ==> 1 + 2 + 5 ==> 8
console.log(sum(1));
// ==> 1 + 4 + 5 ==> 10
console.log(sum(1,0,0));
// ==> 1 + 4 + 5 ==> 10


//优化改造版本
var sum = function(a,b,c){
    if(b!=false){
        b = b || 4;
    }
    if(c != false){
        c = c || 5;
    }
    return a+b+c;
}
//undefined != false 是true
// 0 == false
console.log(sum(1,2,3));
// ==> 1 + 2 + 3 ==> 6
console.log(sum(1,2));
// ==> 1 + 2 + 5 ==> 8
console.log(sum(1));
// ==> 1 + 4 + 5 ==> 10
console.log(sum(1,0,0));
// ==> 1 + 0 + 0 ==> 1