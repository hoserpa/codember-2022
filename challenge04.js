var n_init = 11098;
var n_end = 98123;

var array_numbers = [];

for (let index = n_init; index < n_end; index++) {

    var control = false;

    var number = index.toString();
    
    if(number.match(/55/) != null){
        var position = number.indexOf('55');
        switch (position) {
            case position = 0:
                // 2 -> x < 5
                if(number[2] < 5 || number[2] < number[1])
                    break;
                // 3 -> x < 5
                if(number[3] < 5 || number[3] < number[2])
                    break;
                // 4 -> x < 5
                if(number[4] < 5 || number[4] < number[3])
                    break;

                control = true;
                break;

            case position = 1:
                // 0 -> x > 5
                if(number[0] > 5)
                    break;
                // 3 -> x < 5
                if(number[3] < 5 || number[3] < number[2])
                    break;
                // 4 -> x < 5
                if(number[4] < 5 || number[4] < number[3])
                    break;
                
                control = true;
                break;
                
            case position = 2:
                // 0 -> x > 5
                if(number[0] > 5)
                    break;
                // 1 -> x > 5
                if(number[1] > 5 || number[1] < number[0])
                    break;
                // 4 -> x < 5
                if(number[4] < 5)
                    break;

                control = true;
                break;

            case position = 3:
                // 0 -> x > 5
                if(number[0] > 5)
                    break;
                // 1 -> x > 5
                if(number[1] > 5 || number[1] < number[0])
                    break;
                // 2 -> x > 5
                if(number[2] > 5 || number[2] < number[1])
                    break;
                
                control = true;
                break;

        }
    }

    if(control){
        array_numbers.push(index);
    }
    
}

console.log(array_numbers.length+"-"+array_numbers[55]);