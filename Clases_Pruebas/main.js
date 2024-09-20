


let DireccionHector = {
    calle: "vdf45vc",
    piso: 2,
    depto: 6-321,
    postal: 222222,
    pais: "Colombia",
}

class Address {
    constructor(calle, piso, depto, postal, pais) {
        this.calle = calle;
        this.piso = piso;
        this.depto = depto;
        this.postal = postal;
        this.pais = pais;
    }
    getAddress1(){
        return `Mi direccion es ${this.calle}`;
    }
    getAddress2(){
        return `Yo vivo en ${this.pais}`;
    }
}

const JesusAddress = new Address("Pachamama", 2, "H", 22015, "Colombia")

const DavidAddress = new Address("la santa", 1, "C", 32560, "Panama")
DavidAddress
const SantiagoAddress = new Address("Villa Maria", 8, "A", 22222, "Rusia")
SantiagoAddress


console.log(JesusAddress.getAddress2())