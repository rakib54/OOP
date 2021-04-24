class Animal{
    static category = 'Tiger'
    location = 'Sundarban'
    constructor(name, speed){
        this.name = name;
        this.speed = speed
    }
     compare(animal1 , animal2){
        if(animal1.speed > animal2.speed){
            return `${animal1.name} is Faster`
        }
        return `${animal2.name} is faster`
    }
}

const myCat = new Animal ('Cat', 12)
const tiger = new Animal('tiger', 160)
console.log(Animal.compare(myCat,tiger));
// console.log(Animal.category);
// console.log(Animal.location);
// console.log(myCat.location);