/**
 * Object 和 Function 的区别
 */

 /**
  * 1)__proto__是所有对象都具备的属性，他一般指向创建它的函数的prototype属性
  *     例外：var a={}; var b = Object.create(a);
  *     此时：b.__ptoto__ == a
  *     因为 a是字面值创建的没有prototype属性
  * 2)prototype 是只有函数对象才有的属性
  *     Function.prototype.construtor指向本身
  *     Object.prototype.construtor指向本身
  *     可以说对象是由Function生成的。
  */