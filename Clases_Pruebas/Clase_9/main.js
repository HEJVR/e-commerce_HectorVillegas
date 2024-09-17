let userName = "Jesus";
let userLastName = "Villegas";
let userAge = 17;

let persona_principal = {
    name: "Hector",
    lastName: "Romero",
    age: 22,

    dice_tonterias: function (){
        console.log(`${this.name} dice muchas tonterias`);

        console.log(this);
    }
};

let propiedad = "lastName";

console.log(`Mi nombre es ${persona_principal.name}, mi apellido es ${persona_principal[propiedad]} y tengo ${persona_principal["age"]} años`);

persona_principal.dice_tonterias();



if("lastName" in persona_principal){
    console.log("Si existe en la persona principal");
} else{
    console.log("No existe en la persona principal");
}