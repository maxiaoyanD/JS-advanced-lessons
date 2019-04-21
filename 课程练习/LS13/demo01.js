/**
 * 2019-4-21
 * JS对象
 */
var obj = {
    num:0,
    str:"Hi",
    show:function(){
        console.log(this.str);
    }
};
console.log(obj.num);
console.log(obj.str);
obj.show();
//练习：写一个JS对象，包括自己的姓名、年龄，和一个方法，调用这个方法
var ma = {
    name:'马晓艳',
    age:19,
    show:function(){
        console.log("姓名:"+this.name);
        console.log("年龄:"+this.age);
    }
}
ma.show();