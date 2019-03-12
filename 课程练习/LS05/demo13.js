/*****************2019/3/12 ***************/
//下例中有几个是false？（A：0个，B：1个；C：2个，D，3个）
console.log(3===3); //true
console.log(3==="3");//false
console.log(3=="3");//true
console.log(3==new String(3));//true
console.log(3===new String(3));//false

//下列中的false，
/**需要好好思考 **/
var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz" === obj1);//false,类型不同
console.log(obj1 == obj2);//false
console.log(obj1 === obj2);//false
console.log(obj1 == new String("xyz"));//false


console.log(NaN === NaN); //false
console.log({} === {});//false