/**
 * 2019/06/01
 */
//字符串的解构赋值
const [a,b,c,d,e] = 'hello';//相当于将'hello'装换成['h','e','l','l','o']
console.log(a); // "h"
console.log(b); // "e"
console.log(c); // "l"
console.log(d); // "l"
console.log(e); // "o"

//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值
let {length:len} = 'hello';
console.log(len);//5

//解构赋值的时候，如果等号右边是数值和布尔值，则会先转为对象。
let {toString:s1} = 123;
console.log(s1);//ƒ toString() { [native code] }

let {toString:s2} = true;
console.log(s2);//ƒ toString() { [native code] }

//数值和布尔值的包装对象都具有toString属性，因此变量s都能取到值
//解构赋值的规则是，只要等号右边不是对象，就先将其转换为对象在进行解构赋值
//由于undefined和null无法转换为对象，所以对他们进行解构赋值，都会报错

let {prop:x}=undefined;
let {prop:y} = null;