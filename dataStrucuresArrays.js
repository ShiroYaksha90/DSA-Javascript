// instantiation

class Player {
    constructor(name,type) {
        this.name = name;
        this.type = type;
    }

    introduction (){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

// inheritance

class Support extends Player {
    constructor (name, type){
        super(name, type) // super is used to call the constructor of the parent class
    }

    heal(){
        console.log('Healing')
    }
}

const healer1 = new Support('Jack', 'Healer');
healer1.introduction();
healer1.heal();