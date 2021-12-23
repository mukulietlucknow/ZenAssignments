var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("these two objects are equal ? "+flag);


// question number 2

var req = new XMLHttpRequest();
response = req.open('GET','https://restcountries.com/v2/all' ,true)

req.send();
req.onload = function(){
    var response = JSON.parse(req.response)
    for ( let i in response){
        // console.log(response[i].flags['png'])
    }
}


// question number 3

var req2 = new XMLHttpRequest();
response = req2.open('GET','https://restcountries.com/v2/all' ,true)

req2.send();
req2.onload = function(){
    var response = JSON.parse(req.response)
    for ( let i in response){
        // console.log(response[i].name, " ",response[i].region," ", response[i].subregion," ", response[i].population  )
    }
}

// 1. task from the medium.com url

var var1, var2, var3;
console.log(var1, var2, var3);

// undefined undefined undefined

// Q 2

var myvar = 1;
console.log(myvar);

// Q 3

var first_name = "mukul";
var last_name = "varshney";
var country = "india"
var marital_status = "married"
var age = 29


// Q 4

var [first_name,last_name,country,marital_status,age] = ["mukul","varshney", "india", "married", 29];


// Q 5

var [var1, var2, var3, var4] = ["mukul", true, undefined, null]

// Q 6

var num = "5"
console.log(Number(num), +num, parseInt(num));


// Q 7

console.log(1==1, 2>1, 1<2, true, false, 1)

// Task 2: Simple Programs todo for Operators

// Q 1

console.log(2**2)

// Q 2

let a = 5, b = 6;
[a, b] = [b, a];

// Q 3

console.log(1+2+3)

// Q 4

var cel = 30
console.log(cel*1.8 + 32)

// Q 5

var meter = 1000
console.log((meter/1000)*(.62));

// Q 6

var pound = 100
console.log(pound*.45)

// Q 7 

// here i am considering slice of runs then will print the average of the runs
var runs = [10,23,34,45,56,45,23]
console.log(
    (runs.reduce((a, b) => a + b, 0) / runs.length)
  )





