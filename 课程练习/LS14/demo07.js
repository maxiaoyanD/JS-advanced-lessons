/**
 * 2019/4/21
 * 修改obj的属性
 */
var obj = {
    x:1
}
Object.defineProperty(obj,"x",{
    //是否可修改，name属性是不可修改的
    writable:false,
    //是否可配置，定义的属性能否被删除
    configurable:false,
    //是否可枚举，定义属性能否被遍历到
    enumerable:true,
    //定义属性值
    value:'hhh'
});
for(var k in obj){
    console.log(k,obj[k]);
}