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

// e. Return all the palindromes in an array

var isPalindrome = str => {
     if (str == str.split("").reverse().join('') ){
         return true
     } else {
         return false
     }
}

var checkArr = ["mukul", "mum"]

checkArr.map(element => {
    if (isPalindrome(element)) {
        console.log(element)
    }
})

// Return median of two sorted arrays of same size
var arr1 = [1,2,3,4,5]
var arr2 = [6,7,8,9,10]

var median = (arr1, arr2) => {
    var final_arr = arr1 + arr2
    if ( final_arr.length == 0){
        return
    }
    if (final_arr.length % 2 == 0 ){
        var index1 = final_arr / 2
        var index2 = index1 - 1
        return ((final_arr[index1] + final_arr[index2]) / 2)
    } else {
        return final_arr[Math.floor(final_arr / 2)]
    }
}

// Remove duplicates from an array
 var removeDuplicate = arr => {
     var final_arr = []
     for (let i of arr){
         if (final_arr.includes(i)){
             continue
         } else {
             final_arr.push(i)
         }
     }
     return final_arr
 }

 // Rotate an array by k times

 var rotateKtimes = (arr,k) => {
     var finalArr = new Array(arr.length)
     for (let i in arr){
        finalIndex = (i+k) % arr.length
        finalArr[finalIndex] = arr[i]
     }
     return finalArr
 }

 

