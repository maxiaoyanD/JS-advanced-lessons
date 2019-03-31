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
//闭包
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

//例一
/*
function createInc(startValue){
    return function(step){
        startValue += step;
        return startValue;
    }
}
//startValue 是存储在内存中的
var inc = createInc(5);
console.log(inc(1));//6
console.log(inc(2));//8
inc = createInc(5);
console.log(inc(1))//6
*/

//例二
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//6
console.log(inc(2));//8
var inc2 = createInc(5);
console.log(inc(1));//9
console.log(inc2(2));//7

//例三
function foo(){
    var i = 0;
    function bar(){
        console.log(++i);
    }
    return bar();
}
//注意：此处return的是bar()，是执行结果
foo();//1
foo();//1

//例四
function foo(){
    var i=0;
    function bar(){
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//1
a();//2
b();//1
