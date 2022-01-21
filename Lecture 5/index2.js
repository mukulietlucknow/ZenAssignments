// Problem:
// Write a function called “getOpposite”.
// Given a number, return its opposite

var num = 5;
function getOpposite(num) {
    if (num == 0 ){
        return 0
    } else if ( Number.isInteger(num)){
        return -num
    } else {
        return -1
    }
}
var result = getOpposite(num)



// Problem
// Create a function that takes a string and returns it as an integer.

var mystr = "5";
function toInteger(mystr) {
    return Number(num)
}
var myint = toInteger(mystr)

// Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

var obj = {
    mykey: 'value'
   };
function getProperty(obj, key) {
    if (obj.key){
        return obj.key
    } else {
        return undefined
    }
}

getProperty(obj, "key")


// Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.
// Input:
// removeProperty(obj, “name”);
// Output:
// undefined

function removeProperty(obj, key){
    if (obj.key){
        delete obj[key]
    }
    return undefined
}

// Problem:
// Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).

function powersOfTwo(n){
    var arr = []
    for (let i=0 ; i <=0 ; i++){
        arr.push(Math.pow(2,i))
    }
    return arr.join(',')
}



// Problem:
// Find the maximum number in an array of numbers
function findMax(ar){
    return Math.max(...ar)
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);

// Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
    s = s.split(",").map( num => Number(num));
    return s.reduce((a, b) => a + b, 0);
}









