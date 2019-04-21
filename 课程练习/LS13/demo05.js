/**
 * 2019/4/21
 * JS属性的增删改查
 */
var obj ={};
obj.x = 2;//直接添加属性
console.log(obj.x);//通过.访问属性
obj.x = 5;//设置属性
console.log(obj['x']);//通过[]访问属性
delete obj.x;//删除属性
console.log(obj.x);

//思考：obj3和obj4内容是什么？为什么？
var obj3={};
for(var i=0;i<10;i++){
    obj3.i=i;
}
console.log(obj3);//i:9

var obj4 = {};
for(var i=0;i<10;i++){
    obj4[i] = i;
}
console.log(obj4);
//0:0,1:1......,9:9
