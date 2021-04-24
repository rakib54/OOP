class Circle{
    constructor(radius){
        this.radius = radius
    }
    area(){
        return Math.PI * Math.pow(this.radius , 2)
    }
}

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

const shapes = [new Circle(8), new Rectangle(10,12), new Triangle(10,12)]

for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    console.log(shape.area());
    
}