interface Auto {
    arrancar()
}

interface AutoDeportivo {
    alelerarA200()
}

class Ferrari implements Auto {
    arrancar() {
        throw new Error("Method not implemented.");
    }

}

class Porche implements Auto, AutoDeportivo {
    alelerarA200() {
        throw new Error("Method not implemented.");
    }
    arrancar() {
        throw new Error("Method not implemented.");
    }
}

class Pepito extends Porche {

}

class Fitito implements Auto {
    arrancar() {
        throw new Error("Method not implemented.");
    }

}

class Person {
    auto: Auto;
    name: string;
    puertas: number;
    motor: number;

    constructor(auto: Auto){
        this.auto = auto;
        this.name = "anonimo"
    }

    test(){

        return this.puertas * this.motor;
    }
}

const auto:Auto = new Pepito()
const jorge = new Person(auto)

jorge.test()