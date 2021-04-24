class Power {
    constructor(power, name) {
        this.power = power;
        this.name = name
    }
    getPower(money) {
        if (this.power && money >= 100) {
            return 'I have money'
        }
        return 'I have No power'
    }
}
const SuperMan = new Power('Destroying', 'superMan')
console.log(SuperMan.getPower(100));