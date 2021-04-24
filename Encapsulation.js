class MyProfile {
    _Cgpa = 3.2
    constructor(name){
        this.name = name
    }
    student(){
        console.log(`My name is ${this.name}. My Cgpa is ${this._Cgpa}`);
    }
    
}
const profile = new MyProfile('Rakib')
profile.name = 'Tamim'

profile.student()
