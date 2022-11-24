var fs = require("fs");

var data = fs.readFileSync('users.txt');
var text = data.toString().trim();
var array = text.split("\n\n");


var array_user = [];

array.forEach((element) => {
    element = element.replace(/\n/g,' ').split(" ");
    var user_element = {};
    var control = true;
    element.forEach((user) => {
        user = user.split(":");
        user_element[user[0]] = user[1];
    });

    if(!user_element.hasOwnProperty("usr")) control = false;
    if(!user_element.hasOwnProperty("eme")) control = false;
    if(!user_element.hasOwnProperty("psw")) control = false;
    if(!user_element.hasOwnProperty("age")) control = false;
    if(!user_element.hasOwnProperty("loc")) control = false;
    if(!user_element.hasOwnProperty("fll")) control = false;

    if(control) array_user.push(user_element);
});

console.log(array_user.length+array_user[array_user.length-1]["usr"]);