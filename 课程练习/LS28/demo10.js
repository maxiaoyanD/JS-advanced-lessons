/**
 * 2019/06/01
 */
//对象的解构赋值
var {foo1,bar1} = {foo1:"foo1",bar1:"bar1"};
console.log(foo1,bar1);// foo1 bar1

//对象的解构与数组有一个重要的不同
/**
 * 数组的元素是按次序排列的，变量的取值由它的位置决定
 * 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
 */
var {bar2,foo2}={foo2:"hh",bar2:"kk"};
console.log(foo2,bar2);

var {baz3} = {foo3:"lll",bar3:"ggg"};
console.log(baz3);//undefined

/**********************************************/
//左为键值对时，注意键值对赋值时的对应关系
var {foo4:baz4} = {foo4:"aaa",baz4:"bbb"};
console.log(baz4);//aaa

let obj1 = {first:'hello',last:'world'};
let {first:f,last:l} = obj1;
console.log(f,l); //hello world
//两种写法不一样但是结果一样
let{first,last} = obj1;
console.log(first,last);//hello world

//这实际上说明：对象的解构赋值的是下面形式的简写
var {foo5:foo5,bar5:bar5} = {foo5:"ddd",bar5:"kkk"};
//也就是说：对象的解构赋值的内部机制，是先找到同名属性，
//然后再付给对应的变量。真正被赋值的是后者而不是前者
var {foo6:bcd} = {foo6:"his",bcd:"kdjo"};
console.log(bcd);//"his"
console.log(foo6);//报错 foo6 is not a defined
//也就是被赋值的是bcd而不是foo6

//和数组一样，解构也可以用于嵌套结构的对象，如果是键值对的情况，键只用于匹配，真正赋给的是对应的值。
var obj2 = {
    p:[
        'hello',
        {y:'world'}
    ]
};
var {p:[x,{y}]} = obj2;
console.log(x);//hello
console.log(y);//world
//如果把上边改为var {p:[x,{y:z}]}=obj2就不会输出y
//console.log(p)不能正常输出 p是一个对象的键名

  
var node = {
    loc:{
        start:{
            line:1,
            column:5
        }
    }
};
var {loc:{statr:{line}}} = node;
console.log(line);
console.log(loc);//
console.log(start);//
//只有line是变量，loc和start都是模式，不会被赋值

//嵌套赋值的例子，为什么加括号，
//如果不加解析器将解析为代码块，所有加括号
let obj3 = {};
let arr = [];
({foo7:obj3.prop,bar7:arr[0]} = {foo7:123,bar7:5});
console.log(obj3);//{prop:123}
console.log(arr);//[5]


//对象的解构也可以指定默认值。
var {x2 = 3} = {};
console.log(x2); // 3

var {x3, y3 = 5} = {x3: 1};
console.log(x3); // 1
console.log(y3); // 5

var {x4:y4 = 3} = {};
console.log(y4); // 3

var {x5:y5 = 3} = {x5: 5};
console.log(y5); // 5
var { message: msg = 'Something went wrong' } = {};
console.log(msg); // "Something went wrong"