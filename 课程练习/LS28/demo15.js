/**
 * 2019/06/10
 */

 //以下三种解构赋值不得使用圆括号。
 //(1)、变量声明语句中，不能带有圆括号
 //全部报错
 var [(a)] = [1];
 var {x: (c)} = {};
var ({x: c}) = {};
var {(x: c)} = {};
var {(x): c} = {};
var { o: ({ p: p }) } = { o: { p: 2 } };
//上面三个语句都会报错，因为它们都是变量声明语句，模式不能使用圆括号

//(2)函数参数中，模式不能带有圆括号
//函数参数也有属于变量声明，因此不能带有圆括号。
//函数参数也属于变量声明，因此不能带有圆括号