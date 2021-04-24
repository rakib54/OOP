class Device{
    constructor(name , price ,camera){
        this.name= name
        this.price = price
        this.camera = camera
    }
    getName(){
        console.log('My name is device');
    }
}
class Mobile extends Device {
    constructor(name, price,camera){
        super(name,price)
        this.camera = camera
    }
    getSms(){
        console.log('I can sent a message');
    }
}
class Tablet extends Device{
    constructor(name){
        super(name)
    }
}
const SamTab = new Tablet
SamTab.getName()
const Samsung = new Mobile('S8',32000,'12px')
Samsung.getSms()