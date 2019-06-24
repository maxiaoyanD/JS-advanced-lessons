/**
 * 2019/06/11
 */
//在ES5中，RegExp构造函数有两种
//1、第一个参数是字符串，第二个参数是正则表达式的修饰符
var reg1 = new RegExp('xyz','i');
//=====>等价于
var reg1 = /xyz/i;

//2、参数是一个正则表达式，这时返回一个原有正则表达式的拷贝
var reg1 = new RegExp(/exy/i);
//=====>等价于
var reg1 = /exy/i;
//这种情况ES5不允许加修饰符，会报错
var reg1 = new RegExp(/xyz/,'i');

//ES6改变了这个行为。
//如果RegExp构造函数第一个参数是正则对象，那么第二个参数可以指定修饰符
//而且，返回正则表达式会忽略原来的修饰符,并用flags返回修饰符
    /* 正则表达式对象.flags获取到正则表达式修饰符 */
new RegExp(/xyz/ig,'i').flags;//'i'

//粘连sticky修饰符
/* sticky y修饰符 他会从上一次匹配成功的结束位置开始匹配*/
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;
r1.exec(s); // ["aaa"]
r2.exec(s); // ["aaa"]
r1.exec(s); // ["aa"]
r2.exec(s); // null
//g修饰符匹配没有位置要求，但是y必须从头开始

// ES5的source属性
// 返回正则表达式的正文
/abc/ig.source
// "abc"