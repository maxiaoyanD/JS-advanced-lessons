/**
 * 2019/4/21
 * 对象的访问器属性
 */
//实例一
var o = {
    _x:1,
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
};
console.log(o.x);//1
o.x=2;
console.log(o.x,o._x);//2 2
o.hasOwnProperty("x");//true 访问器属性
o.hasOwnProperty("_x");//true 数据属性

//将set和get中的_x换成x-----报错
var o = {
    _x:1,
    get x(){
        return this.x;
    },
    set x(val){
        this.x = val;
    }
};
console.log(o.x);//1
o.x=2;
console.log(o.x,o._x);//2 2

//实例二
//只有get没有set是只读的，不可写
//只有set没有get是只写的，读取的时候是undefined
var o={
    _x:1,
    get x(){
        return this._x;
    }
};
console.log(o.x);
o.x=2;//这个没有起作用
console.log(o.x,o._x);//1 1 

var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);
o.x = 2;
console.log(o.x);//1

//实例三
var p1 ={
    _name:'jack',
    _age:26,
    set age(val){
        if(val>0 && val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age=888;
console.log(p1.age);

//访问器属性 综合实例
var p={
    x:1,
    y:1,
    get r(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    },
    set r(newValue){
        var oldValue = Math.sqrt(this.x*this.x+this.y*this.y);
        var ratio = newValue/oldValue;
        this.x*=ratio;
        this.y*=ratio;
    },
    get theta(){return Math.atan2(this.y,this.x);}
};
var q = Object.create(p);
q.x = 2;
q.y = 2;
console.log(q.r);
console.log(q.theta);