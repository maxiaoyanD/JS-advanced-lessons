/*************2019/03/11 ************/

//带有字符串的+表示拼接
//有对象的+将类型转换成对象
//其余有+转换成数值类型
//带有字符串的-，将字符串转换为数值类型
console.log("1"+"2");//"12"
console.log("1" + 2);//"12"
console.log(1+{});//"1[object Object]"
console.log(true + true);//2
console.log("5" - 2);//3

var x = "1";
console.log(++x);//2
//注意：++和--的隐式类型转换
//++x 输出是2 x++输出的是"1"
var x="1";
console.log(x+1);//"11"
//思考：+= 是转换成字符串类型还是转成数字类型
//不同情况下转换的类型不同
var x="1";
console.log(x+=1);
// ==> x=x+1 ==> "1"+1 ==> "11"
var x=1;
console.log(x+=1);//2

//回顾 ++i 和 i++
var i=1;
var y = ++i + ++i + ++i;
console.log(y);
// ==> 2 + 3 +4 ==>9