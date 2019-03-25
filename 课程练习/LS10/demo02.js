/**
 * 2019/3/24
 * 词法作用域
 */

var name = "Jack";
function echo() {
    console.log(name);
}
echo();

//词法作用域 与调用形式无关
//实例一
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//jack
//实例二
var name = 'jack';
function echo(){
    console.log(name);
}
function foo(){
    var name = 'Bill';
    function fee(){
        var name = 'Lucy';
        echo();
    }
    fee();
}
foo();//jack

//通过new Function实例化函数对象，不一定遵循静态词法作用域
scope = "g";
function foo(){
    var scope = "l";
    return new Function("console.log(scope);");
}
foo()();//"g"====>>不太明白