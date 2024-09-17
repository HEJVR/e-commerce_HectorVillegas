// Actividad de clase #1

// const numero1 = prompt("Ingresa el primer numero");
// const texto_tipo_de_signos = "+ : Sumar" + "\n" + "- : Resta" + "\n" + "* : Multiplicacion" + "\n" + "/ : Division" + "\n";
// const tipo_operacion = prompt(texto_tipo_de_signos);
// const numero2 = prompt("Ingresa el segundo numero");

// if (tipo_operacion == "+" || tipo_operacion == "-" || tipo_operacion == "*" || tipo_operacion == "/"){
//     if (tipo_operacion == "+"){
//         alert("La suma de los dos numeros es: " + (parseInt(numero1) + parseInt(numero2)));
//     }else if (tipo_operacion == "-"){
//         alert("La resta de los dos numeros es: " + (parseInt(numero1) - parseInt(numero2)));
//     }else if (tipo_operacion == "*"){
//         alert("La multiplicaion de los dos numeros es: " + (parseInt(numero1) * parseInt(numero2)));
//     }else if (tipo_operacion == "/"){
//         alert("La division de los dos numeros es: " + (parseInt(numero1) / parseInt(numero2)));
//     }
// }else{
//     alert("Error, tipo de signo invalida");
// }









// segundo ejercicio,
const numero = 2;

switch (numero) {
    case 1:
        console.log("Es 1");
        break;

    case 2:
        console.log("Es 2");
        break;

    default:
        console.log("No es 1 ni 2, es la opcion default");
        break;
}




for(let i = 5; i < 10; i++) {
    console.log(i);
}






let h1 = document.querySelector("h1");

h1.innerText = "Productos";

let array = [];

for (let i = 1; i < 10; i++){
    array.push(``);
}

console.log(array);


// const nota = prompt("ingresa la nota que te sacaste");

if (nota > 10) {
    console.log("Dios miooo, A+++");
} else if (nota >= 7) {
    console.log("Te sacaste una A");
} else if (nota >= 4) {
    console.log("Te sacaste una B");
} else {
    console.log("Te sacaste una C, que trite....");
}






// Notas de clase

const feriado = false;

if (feriado) {
    console.log("esto funciona")
}
else {
    console.log("esto no funciona")
}




if (2 + 2 == 3 + 1) {
    console.log("2+2 si es igual a 3+1");
}

if (2 > 1) {
    console.log("es mayor");
}

if (2 <= 10) {
    console.log("10 es mayor o igual a 2");
}

if (2 >= 10) {
    console.log("2 no es mayor o igual a 10");
}

if ("10" == 10) {
    console.log("10 es igual a 10");
}

if ("10" === 10) {
    console.log("10 es igual a 10");
} else {
    console.log("10 no es igual a 10, porque son diferente tipo de dato");
}

console.log(5 % 2);










