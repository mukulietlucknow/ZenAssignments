// print odd number
var arr = [1,23,34,34,45,3,4,78,8]

var odd_number = function(arr){
    for (let i of arr){
        if ( i % 2 !== 0){
            console.log(i);
        }
    }
}
odd_number(arr);


// Convert all the strings to title caps in a string array
var arr2 = ["mukul"];

(function(arr){
    for (let i of arr){
        console.log(i.charAt(0).toUpperCase()+i.substring(1).toLowerCase());
    }
})(arr2);

// 
