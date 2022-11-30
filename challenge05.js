var fs = require("fs");

var data = fs.readFileSync('mecenas.json');
var text = data.toString();
var array = JSON.parse(text);

var index = 0;
var count = 0;
var kill = true;

while (array.filter(x => x === 'X').length<=array.length-2) {

    if(kill && array[index]!='X'){
        if(array.filter(x => x === 'X').length==array.length-2)
            console.log("submit "+array[index]+"-"+index);
        while (kill) {
            index++;
            if(index>array.length-1)
                index=0;
            if(array[index]!='X'){
                array[index]='X';
                kill=false;
            }
        }
        kill=true;
    }

    index++;

    if(index>array.length-1)
        index=0;
}


