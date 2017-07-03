/* not use let  keyword
for(var i =1; i<=5; i++){
    setTimeout(function() {
        console.log(i);
    }, 1000);
}*/

/* use let keyword
for(let i=1; i<=5; i++){
    setTimeout(function() {
        console.log(i)
    }, 1000);
}*/

/* immediately-invoked_function_expression */
for(var i=1;i<=5;i++){
    (function(x){
        setTimeout(function() {
            console.log(x);
        }, 1000);
    })(i)
}