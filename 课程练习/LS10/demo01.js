/**
 * 2019/3/24
 * 全局作用
 */
//全局作用
var a = 10;
    b = 20;
function fn(){
    //fn局部作用域
    var a = 100;
        c = 200;
        console.log(a,b,c,d);//100 20 200 undefined
    function bar(){
        var a = 500;
            d = 600;
        console.log(a,b,c,d);//500 20 200 600
    }
    bar();
}
fn();
//注意：这里的a 的值是10
console.log(a,b,c,d);//10 20 undefined undefined