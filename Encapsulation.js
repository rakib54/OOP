class MyProfile {
    #Cgpa = 3.2
    constructor(name){
        this.name = name
        this.#Cgpa = 3.5
    }
    student(){
        console.log(`My name is ${this.name}. My Cgpa is ${this.#Cgpa}`);
    }
    
}
const profile = new MyProfile('Rakib')
profile.name = 'Tamim'

profile.student()
