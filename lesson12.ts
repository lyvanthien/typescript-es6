let displayColorsSpread = function(message,...colors: string[]){
    console.log(message);
    for(let i in colors){
        console.log(colors[i]);
    }
    
}
let messSpread="Hello";
let colors = ['Red','Green','Blue'];

displayColorsSpread(messSpread,...colors);
