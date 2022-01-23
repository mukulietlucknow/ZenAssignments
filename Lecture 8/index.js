class movie {
    constructor(title, studio, rating ){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG (arr_obj){
        return arr_obj.filter( ele => ele.rating == "PG")
    }
}

var obj = new movie("kal ho na ho", "mumbai", "PG")


class Circle {
    constructor(radius=1.0, color='red'){
        this.radius = radius;
        this.color = color
    }

    getRadius(){
        return this.radius;
    }

    setRadius(radius){
        this.radius = radius;
        return this.radius
    }

    getColor(){
        return this.color
    }

    setColor(radius){
        this.color = color;
        return this.color
    }

    toString(){
        return `${this.radius} ${this.color}`
    }

    getArea(){
        return Math.PI * Math.pow(this.radius,2)
    }

    getCir(){
        return 2* Math.PI * this.radius;
    }

}

