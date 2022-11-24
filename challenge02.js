// "109105100117" -> midu
// "9911110010110998101114" -> codember
// "9911110010110998101114 109105100117" -> codember midu
// "11210897121 116101116114105115" -> play tetris

var code = "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101";
code = code.split("");
var out = "";

for (let index = 0; index < code.length;) {
    const element = code[index];
    if(element >= 9 ){ 
        out += String.fromCharCode(code[index]+code[index+1]);
        index=index+2;
    }
    if(element == " "){
        out += " ";
        index++;
    }else{
        out += String.fromCharCode(code[index]+code[index+1]+code[index+2]);
        index=index+3;
    }
}


console.log(out);