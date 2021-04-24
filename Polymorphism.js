class Rectangle{
    constructor(height , width){
        this.height = height
        this.width = width
    }
    area(){
        return this.height * this.width
    }
}
class Triangle{
    constructor(base , height){
        this.height = height;
        this.base = base
    }
    area (){
        return this.base * this.height /2
    }
}
const Rectangle1 = new Rectangle(10,12)
console.log(Rectangle1.area());
const Triangle1 = new Triangle(12,10)
console.log(Triangle1.area());