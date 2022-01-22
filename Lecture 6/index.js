//  task url https://medium.com/@reach2arunprakash/guvi-zen-simple-debugging-tasks-adcdc2d3249d

// 1

var aa = (f,s,t) => {
        let f,s,t;
        console.log(f,s,t);
        if(f>s && f>t){
            console.log(f)}
        else if(s>f && f>t){
            console.log(s)}
        else{
            console.log(t)
        }
   }


// 2

let n = 123;
console.log(add(n));
function add(n){
    n = String(n)
    let sum = 0;
    for(var i=0;i<n.length;i++){
        sum+=Number(n[i])
    }
    return sum;
}


// 4

var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i <= arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].subString(1));
 }
}


// Fix the code to rotate an array by k times and return rotated array using IIFE function
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = k % arr.length;
(function(arr,k) {
 out = new Array(arr.length)
 out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < arr.length; i++) {
    out[ (i + k) % arr.length ] = arr[i];
 }
 console.log(out);})();

//  Fix the code to give the below output:
// Expected Output:
// [
// {firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard"},
// {firstName: "Sri", lastName: "Devi", age: 28, role: "Coder"}
// ]


// Code:
var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final=[]

while(array.length!=0)
{
 var outer_remove = array.shift();
 var new_object = {}
 while(outer_remove.length!=0)
 {
 
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value
 }
 final.push(new_object)
}

//
