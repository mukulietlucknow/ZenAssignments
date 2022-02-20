function formSubmit(event){
    event.preventDefault();
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    address = document.getElementById("inputAddress").value;
    inputZip = document.getElementById("inputZip").value;
    inputGender = document.getElementById("inputGender").value;
    inputCountry = document.getElementById("inputCountry").value;
    inputState = document.getElementById("inputState").value;
    food = document.getElementById("inputFood").options[document.getElementById("inputFood").selectedIndex].value
    final_object = {
        "firstName" : firstName,
        "lastName" : lastName,
        "address" : address,
        "inputZip" : inputZip,
        "inputGender" : inputGender,
        "inputCountry" : inputCountry,
        "inputState" : inputState,
        "food" : food
    }
    items = JSON.parse(localStorage.getItem("object") || "[]");
    items.push(final_object)
    localStorage.setItem("object", JSON.stringify(items));
    appendTable()
    document.getElementById("form").reset()
}

function appendTable(){
    objects = JSON.parse(localStorage.getItem("object") || "[]");
    final_string = ""
    objects.map((object) => {
        final_string  = final_string + `<tr><td>${object.firstName}</td><td>${object.lastName}</td><td>${object.address}</td><td>${object.inputState}</td><td>${object.inputGender}</td><td>${object.inputZip}</td><td>${object.food}</td><td>${object.inputCountry}</td></tr>`
    })
    console.log(final_string)
    document.getElementById('data').innerHTML = final_string;
}



