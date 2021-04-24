class Animal{
    constructor(){
        
    }
    talk(){
        throw new Error ('You must implement talk method')
    }
}

class Cat extends Animal{
   
    talk(){
        console.log('Mewao Meaow');
    }
}
class Dog extends Animal{
    
    talks(){
        console.log('bark bark');
    }
    talk(){
        this.talks()
    }
}
const cat1 = new Cat ()
cat1.talk()
const dog1 = new Dog()
dog1.talk()