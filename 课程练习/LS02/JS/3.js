(function () {
    //基本（原始）数据类型与引用（对象）类型的区别 赋值方式不同
    var str_a = "a"; 
    var str_b = str_a; 
    str_b = "b"; 
    console.log(str_a,str_b);//结果：a b

    var obj_a = {v:"a"}; 
    var obj_b = obj_a; 
    obj_b.v = "b"; 
    console.log(obj_a,obj_b); //都是{v:"b"}

    obj_b = {v:"c"}; 
    console.log(obj_a,obj_b);//结果{v:"b"} {v:"c"}
}());


var obj_c = {x1:2,y1:3};//obj_c.x1在堆区
var obj_d = {x2:2,y2:3};

console.log(obj_c.x1 === obj_d.x2);//true
console.log(obj_c === obj_d);//false

console.log({m:1}==={m:1});//false


var a =123;
function foo1(x){
	x = 345;
}
foo1(a);
console.log(a);//123


var a ={y:123};
function foo2(x){
	x.y = 345;
}
foo2(a);

console.log(a.y);//345

//
var a ={y:123};
function foo3(x){
	x.y = 345;
	x = {y:456};
}
foo3(a);
console.log(a.y);//345


var a ={y:123};
function foo4(x){
    x = {y:456};	
    x.y = 345;	
}
foo4(a);
console.log(a.y);//123