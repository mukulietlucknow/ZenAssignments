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
        console.log(response[i].flags['png'])
    }
}


// question number 3

var req = new XMLHttpRequest();
response = req.open('GET','https://restcountries.com/v2/all' ,true)

req.send();
req.onload = function(){
    var response = JSON.parse(req.response)
    for ( let i in response){
        console.log(response[i].name, " ",response[i].region," ", response[i].subregion," ", response[i].population  )
    }
}

// article i have read

