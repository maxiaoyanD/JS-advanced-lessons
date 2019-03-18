/*********************2019/03/13 *********************/
//Number构造器属性（静态属性）
//属相表示在JavaScript中所能表达的最大(小)值
Number.MAX_VALUE 
Number.MIN_VALUE
//表示非数字和NaN相同
Number.NaN
//属性表示负（正）无穷大
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY

//Number原型方法（Number对象继承的方法）
//Number.prototype是number构造函数的原型；
//Number所以实例都继承自Number.prototype，
//修改 Number 构造函数的原型对象会影响到所有 Number 实例。

// Number.prototype.toFixed();
//使用定点表示法或指数表示法来表示的指定显示位数的该数值对象的字符串表示。
// Number.prototype.toPrecision();
//转换为字符串
// Number.prototype.toString();
//返回一个使用指数表示法表示的该数值的字符串表示。（转换值在0-100以内）
// Number.prototype.toExponential();

var n1 = 12345.6789;
console.log(n1.toFixed(2));//12345.68
console.log(n1.toPrecision(2));//1.2e+4
console.log(n1.toString());//"12345.6789"
console.log(n1.toExponential(2));//"1.23e+4"



console.log(NaN === NaN);//false
console.log(isNaN("12,3"));//true
//Math.floor(x):返回一个小于或等于x的最大整数
//Math.ceil(x):返回一个大于或等于x的最小整数
console.log(Math.floor(3.8));//3
console.log(Math.floor(-3.8));//-4
console.log(Math.ceil(3.2));//4
console.log(Math.ceil(-3.2));//-3
//Math.round(x):返回一个四舍五入后最接近的整数
//参数的小数部分小于0.5，则舍入到相邻绝对值更大的整数
//参数的小数部分大于0.5，则舍入到相邻绝对值更小的整数
//如果参数的小数部分恰好等于0.5，则舍入到相邻的在正无穷方向上的整数
//注意：Math.round()并不是总舍入到远离0的方向。
//（小数为负数等于0舍入到距离0近的）
console.log(Math.round(-3.2));//-3
console.log(Math.round(-3.5));//-3
console.log(Math.round(-3.8));//-4