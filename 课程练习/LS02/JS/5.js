(function () {
    var str_a = "Hello World";
    function fn_a(arg){
        console.log(arg); // Hello World
        arg = "Hai";
        console.log(str_a,arg); //  Hello World , Hai
    };
    fn_a(str_a);
    console.log(str_a);// Hello World
    
    
    
    // 引用传递
    var obj_a = {value:1};
    function fn_a(arg){
        arg.value=3;
    };
    fn_a(obj_a);
    console.log(obj_a);//{value:3}
    
    function fn_b(arg){
        arg={value:2};//创建了一个新的对象，arg指向新对象
    };
    fn_b(obj_a);
    console.log(obj_a);//{value:3}
    
    
    
    }());