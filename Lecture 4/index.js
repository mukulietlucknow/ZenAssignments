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


// Q 8

// this question is same as before so skipping it


// Q 9

console.log(2**3)

// Q 10

var principle = 1000
var rate_of_interest = 14
var time = 1

console.log((principle*rate_of_interest*time) / 100)

// Q 11

var side = 2 // metere
//area
console.log(((3**(1/2))/4)*side**2)

// Q 12

var width = 10
var height = 15

area = 1/2 * width * height
console.log(area)

// Q 13 

var radious = 3
var volume = 4/3 * Math.PI * (radious ** 3)
console.log(volume)

// Q 14

var tringluler_prism_height = 10
var bi = 10
var height = 10
var area_of_the_tringle = 1/2 * bi * height
console.log(area_of_the_tringle*tringluler_prism_height)

// Q 15

// this is same as Q 11 / 12


// Q 16

var actual_cost = 100
var sold_cost = 90
var discount = - (sold_cost - actual_cost) / actual_cost * 100
console.log(discount)

// Q 17

var radious = 10
var diameter = radious * 2
var area = Math.PI * radious ** 2
var curcumpherence = 2 * Math.PI * radious


// Q 18

console.log(1==1, 1>1, 1<1 , 1 != 1)

// Q 19

console.log("*****\n*****\n*****\n*****\n*****\n");


//Q 20

console.log(100*24*30*10)


// Q 21

var marks = [100, 90,80,70,50]

console.log(marks.reduce((a, b) => a + b, 0) / marks.length)

// Task 3

// Q 1

for (let i = 1; i < 7 ; i++ ){
    string = ""
    for (let j = 1 ; j <= i ; j++){
        string += "#"
    }
    console.log(string);
}

// Q 2

string_arr = ["mukul", "kumat", "varsheny"]
for (const i of string_arr){
    console.log(i);
}

// Q 3

var myarray=[11,22,33,44,55]

var length = 0
for (let i in myarray){
    length += 1
}

console.log(length);


// Q 4

// to get the nth element of the array we can use arrray[nth - 1] element

// Q 5

// Find the person is ur friend or not.
const friends = [
                "Mari",
                "MaryJane",
                "CaptianAmerica",
                "Munnabai",
                "Jeff",
                "AAK chandran"
                ];
function dataHandling(input, name){
    for (var i = 0; i < input.length; i++) {
        if (friends[i] == name){
            console.log("he is my friend");
            break
        }
    }
}
let found = dataHandling(friends,"Jeff");
console.log(found);


// Q 6

// We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
var friends2 = [
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];
function sort_the_arrays(input){
    console.log(input.sort());
}
sort_the_arrays(friends1.concat(friends2));


// Q 7
//6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.
sum = 0
for ( let i of friends1.concat(friends2)){
    sum += i.length;
}

var average_length = sum / friends1.concat(friends2).length
console.log(Math.round(average_length));


// 8
// Find the average in the array below. Make sure you add only the numbers and do avg.
const friendsInfo = [6, 12, 'Mari', 1, true, 'CaptianAmerica', 8, 10];
var count = 0
var sum = 0

for (let i of friendsInfo){
    if (!isNaN(i)){
        count += 1
        sum += i
    }
}

console.log(sum / count);

// 9
myobject = {1:"one","11":1,"name":"arun"};
myobject["another"] = "element";
console.log(myobject);  // added the element in the object

























