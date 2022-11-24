var fs = require("fs");

var data = fs.readFileSync('colors.txt');
var text = data.toString().trim();

text = text.replace('[','').replace(']','').replace(/\r/g, '').replace(/\n/g, '').replace(/"/g, '').replace(/ /g, '');
var array_colors = text.split(",");

//var array_prueba = ['red', 'blue', 'red', 'blue', 'green'];
//var array_prueba = ['red', 'green', 'red', 'green', 'red', 'green'];
//var array_prueba = ['blue', 'red', 'blue', 'red', 'gray'];
//var array_prueba = ['red', 'red', 'blue', 'red', 'red', 'red', 'green'];

var color_1 = '', color_2 = '', color_fin, n_cont = 2, n_fin = 0;

//array_prueba.forEach(element => {
array_colors.forEach(element => {
    if(color_1 == ''){
        color_1 = element;
        return;
    } 
    if(color_2 == ''){
        color_2 = element;
        n_cont++;
        return;
    }

    if(color_1 != '' && color_2 != ''){
        if(element == color_1){
            n_cont++;
            return;
        }
        if(element == color_2){
            n_cont++;
            color_fin = element;
            n_fin = n_cont;
            return;
        }
        n_cont = 2;
        color_1 = '';
        color_2 = '';
    }
});

console.log(n_fin+"@"+color_fin);