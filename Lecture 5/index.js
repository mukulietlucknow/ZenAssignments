// i have mixed up the IIFE and normal fun and arrow function
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

// Sum of all numbers in an array

var sum = arr => {
    let sum = 0
    for (let i of arr){
        sum += i
    }
    return sum
}

console.log(sum([1,2,3]))

// Return all the prime numbers in an array
var isPrime = num => {
    // number should be greater than 0 for this function
    let arr = [0,1]
    if (arr.includes(num)){
        return false
    }
    let numHalf = Math.floor(num/2)
    //console.log(numHalf)
    if (numHalf == 1) {
        return true
    }
    for (let i = 2 ; i <= numHalf ; i++){
        if (num % i == 0){
            return false
        }
    }
    return true
}

var printPrime = arr => {
    for ( let i of arr){
        if (isPrime(i)){
            console.log(i)
        }
    }
}

printPrime([1,2,3,4,5,6,7,8,9])

// 

