/**
 * 2019/4/21
 * 创建对象的三种方法
 */
//1、通过字面量的方式创建JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);//10
console.log(obj.str);//"Hi"
console.log(obj.show());//"Hi"
console.log(obj.__proto__);
console.log(obj.__proto__ == Object.prototype);//true

//2、通过Object的create静态方法创建对象
//注：JS对象是通过原型链的方式实现的对象继承
var newObj = Object.create(obj);
//newObj的原型是obj
newObj.age=23;
console.log(newObj.age);//是newObj自有的属性
console.log(newObj.__ptoto__)//obj
console.log(newObj.__proto__ == obj);//true

/** 
 * 字面量创建JS对象
 * o={};
 * 就相当于
 * o= Object.create(Object.prototype);
 * o = Object.create(Object.prototype,{
 *      //foo会成为所创建对象的数据属性
 *      foo:{
 *          writable:true,
 *          configurable:true,
 *          value:"hello"
 *      },
 *      //bar会成为所创建对象的访问器属性
 *      bar:{
 *          configurable:false,
 *          get:function(){ return 10},
 *          set:function(val){
 *              console.log("Setting `o.bar` to", value);
 *          }
 *      }
 * })
*/

//3、构造函数的方式创建JS对象
function Person(name,age){
    this.name = name;
    this.age = age;
}
/*现在的构造函数 将共有方法添加在原型链上 */
Person.prototype.sayName = function(){
    console.log("hello, I'm" + this.name);
};
var person = new Person("Mike",21);
person.sayName();

//注意：
var objstr = new Object("xxx");
console.log(typeof objstr);//object
console.log(objstr instanceof String)//true

var objNum = new Object(15);
console.log(typeof objNum);//object
console.log(objNum instanceof Number);//true

var objBoolean = new Object(true);
console.log(typeof objBoolean);//object
console.log(objBoolean instanceof Boolean);//true