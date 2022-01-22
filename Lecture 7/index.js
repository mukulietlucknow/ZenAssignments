// task URL -> https://docs.google.com/document/d/1iza9j-P6zsN0gZ9ZVuNH0lMxdUeuAYfaGMPvyWL_IcY/edit

var req = new XMLHttpRequest();
var key = ""

response = req.open('GET','https://restcountries.com/v2/all' ,true)

req.send();
req.onload = function(){
    var response = JSON.parse(req.response)
    var country_asia = response.filter( ele => {
        if (ele.region == "Asia"){
            return true
        } else {
            return false
        }
    })
    var country_less_than_200000 = response.filter( ele => {
        if (ele.population < 200000){
            return true
        } else {
            return false
        }
    })

    response.forEach(element => {
        console.log(`${element.name} ${element.capital}`)
    });

    var total_population = response.reduce((a,b) => a + b.population, 0)
    console.log(total_population)

    var all_usd = response.map(ele => {
        if (ele.hasOwnProperty('currencies')){
            for (let key in ele.currencies[0] ){
                if (ele.currencies[0].code == "USD") {
                    return ele.name
                }
            }
        }
        return null
    })
    console.log(all_usd)
}



