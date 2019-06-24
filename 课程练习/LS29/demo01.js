/**
 * 2019/06/11
 */
//ES6为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历
for(let code of "foo"){
    console.log(code);
}//f o o

//提供新的方法用于查找、判断和生成字符串
var s = "Hello World!";
s.startsWith("Hello");//true
s.endsWith("!");//true
s.includes("o");//true
//第二个参数，表示开始搜索的位置
s.startsWith('world', 6); // true
s.endsWith('Hello', 5); // true
s.includes('Hello', 6); // false

//repeat方法返回一个新的字符串，将原字符串重复n次
'x'.repeat(3);//'xxx'
//如果参数是小数会被取整
'nihao'.repeat(2.5);//'nihaonihao'
//如果参数是负数或者是Infinity，会报错
'hh'.repeat(-1);//RangeError
'na'.repeat(Infinity);