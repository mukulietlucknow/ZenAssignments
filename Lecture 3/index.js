var obj = {
    Name: "mukul kumar varsheny",
    DOB: "may 6 1993",
    Addr: "Bangalore"
}

// this is for in loop
for ( var i in obj){
    console.log(i, obj[i])
}

// this is for each loop
keys = Object.keys(obj)
keys.forEach((key, index) => {
    console.log(`${key}: ${obj[key]}`);
});


// for of loop
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}

