/**
 * 2019/3/31
 */
//闭包引入案例（思考下述两个案例的区别，哪个x始终未被释放）
function f1(){
    var x = 1;
    function f2(){
        return ++x;
    }
    return f2();
}
var f3 = f1();
console.log(f3);//2
console.log(f3);//2

function f1(){
    var x = 1;
    function f2(){
        return ++x;
    }
    return f2;  
}
var f3 = f1();
console.log(f3());//2
console.log(f3());//3
