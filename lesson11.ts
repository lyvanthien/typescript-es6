/* let displayColors = function(){
    for(let i in arguments){
        console.log(arguments[i]);
    }
} 

let displayColors = function(...colors: string[]){
    console.log(colors);
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

displayColors('Red');
displayColors('Red','Green');
displayColors('Red','Green','Blue');
*/
let displayColors1 = function(message,...colors: string[]){
    console.log('displayColors1 has message : '+message);
    console.log('displayColors1 has colors : '+colors);
    for(let i in arguments){
        console.log(arguments[i]);
    }
    //console.log(arguments.length);
    
}
let mess="Hello";
displayColors1(mess,'Red');
displayColors1(mess,'Red','Green');
displayColors1(mess,'Red','Green','Blue');

let displayColors2 = function(...colors: string[]){
    console.log('displayColors1 has message : ');
    console.log('displayColors1 has colors : '+colors);
    for(let i in arguments){
        console.log(arguments[i]);
    }
    //console.log(arguments.length);
    
}
let mess1="Hello";
displayColors2(mess1,'Red');
displayColors2(mess1,'Red','Green');
displayColors2(mess1,'Red','Green','Blue');
