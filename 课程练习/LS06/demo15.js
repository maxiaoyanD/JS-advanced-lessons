/***********2019/03/11 **********/

/*
    原操作数非布尔类型：
    &&:左真右；左假左
    ||:左真左，左假右
*/
/******
 * 注意：所有的对象转换为布尔类型都是true 
 ******/
//操作数非布尔类型，&&短路原则：&&:左真右；左假左
console.log(2&&4);//4
console.log(0&&4);//0
console.log({x:2}&&{name:"lili"})//name:"lili"
console.log(null && "hello");//null
console.log({}&&"world")//world

//操作数非布尔类型，||短路原则：||:左真左，左假右
console.log(2||4);//2
console.log(0||4);//4
console.log({x:2}||{name:"ja"});//x:2
console.log(null || "hello");//"hello"
console.log({} || "world");//{}

//思考 所有对象转换为布尔类型 都为true
console.log((new Boolean(false))&&2220);//2220
console.log((new Boolean(false))||234);//Bollean{false}
//实例化对象转换为布尔类型都是真值