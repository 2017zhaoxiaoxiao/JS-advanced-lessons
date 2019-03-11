var str = "abc_def_ghi_jkl_mn";

//转义字符 \n \" \' \\
console.log("abc\ndefghi\\\n\'mn\'");

var str = "abc_def_ghi_jkl_mn";
console.log(str.split("_"));//{'abc','def','ghi','jkl','mn'}
console.log(str.split("_",2));//{'abc','def'}
console.log(str.concat("_opq"));//abc_def_ghi_jkl_mn_opq
console.log(str.substr(4,7));//def_ghi
console.log(str.substring(4,7));//def
console.log(str.slice(2));//c_def_ghi_jkl_mn
console.log(str.slice(2,5));//c_d
console.log(str.slice(-2));//mn
console.log(str.slice(2,-2));//c_def_ghi_jkl

console.log(str.bold());//<b>abc_def_ghi_jkl_m</b>
console.log(str.link());//<a href='undefined'>abc_def_ghi_jkl_m</a>
console.log(str.fontcolor("red"));//<font color='red'>abc_def_ghi_jkl_m</font>
console.log(str.fontsize(50));//<font size='50'>abc_def_ghi_jkl_m</font>