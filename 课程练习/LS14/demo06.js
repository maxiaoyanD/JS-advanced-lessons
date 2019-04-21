/**
 * 2019/4/21
 * JS对象属性特性
 */
var objProto = {
    z:3
};
var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;
console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log(obj.__proto__)
//原型链上有toString属性
console.log(obj.toString);
//对象上的某些属性和方法是没有办法遍历出来的
//用for in 来遍历所有原型链上的属性
for(var k in obj){
    console.log(k,obj[k]);
}
//x:1,y:2,z:3