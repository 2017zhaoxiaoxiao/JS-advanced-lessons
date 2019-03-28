/**
 * Created by qile on 2017/8/14.
 */
var a = 34;
if(a = 45){
    console.log("是否会输出？");//赋值判断弄清楚
}

var b = 34;
if(45 == b){//为什么要这样写，有什么好处
    console.log("是否会输出？");//防止将判断写成赋值
}