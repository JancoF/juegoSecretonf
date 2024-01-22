/*
let parrafo = document.querySelector('p');
parrafo.innerHTML= 'Escribi un numero del 1 a 10 '
*/



let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

function asignaTextoElemto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);// estrada de numero desde input

    if (numeroDeUsuario === numeroSecreto) {
        asignaTextoElemto('p', `Asertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');//activa el color de boton iniciar de nuevo
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignaTextoElemto('p', 'Es numero es menor ')

        } else {
            asignaTextoElemto('p', 'En numero secreto es mayor')
        }
        intentos++;
        limpiearCaja();
    }
    return;

}

function limpiearCaja() {
    document.querySelector('#valorUsuario').value = '';// limpia el input 
}


//funcion que genera numeros aleatorios
function generaNumeroSecreto() {
    let numeroGRnerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGRnerado);
    console.log(listaNumerosSorteados);
    // si ya soteamos todo los numero 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignaTextoElemto('p', 'Ya se sorteron todo los numeros posibles ');
        
        //si el numero generado ibcluido en la lista hacemos una operacion si no no
    } else {
        if (listaNumerosSorteados.includes(numeroGRnerado)) {
            return generaNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGRnerado);
            return numeroGRnerado;
        }

    }

}

function condicionesIniciales() {
    asignaTextoElemto('h1', 'Juego de numero secreto NF');
    asignaTextoElemto('p', `Escribe número de 1 a ${numeroMaximo}  `);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //limpiar la caja
    limpiearCaja();
    //indicar intervalo de numeros
    //generar nuevo numero aleatorio
    //inicialiar nuvo juego
    condicionesIniciales();
    //desablitilar el nuevo juevo
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
condicionesIniciales();


/*
function saludo (){
    console.log('hola mundo')
}
saludo();

// 02
function recibirNombre (nombre){
    console.log(`Este es tu nombre ${nombre}`)

}
recibirNombre(" pepito");

//03
function recibirNumero (numero){
    resultado= numero*2;
    console.log(resultado);
    return resultado;
   // alert(`El doble del numero ${recibirNumero} es ${resultado} `)
//04

function RecibirTresNum (){
let num1 = 8;
let num2 = 4 ;
let num3 = 6;
    promedio =( num1+num2+num3) /3;
    console.log(promedio)
return;
}

RecibirTresNum();

}
recibirNumero(4);

function calcualarPromedio (a,b,c){
    return (a+b+c)/3;

}

//05
let promedio = calcualarPromedio(8,78,6);
console.log(promedio)

function calcularMayor (a,b){
return a > b ? a : b;
}

let resultado = calcularMayor(7,5)
console.log(resultado)

//06
function numMultiplicar (a){
    return a*a;

}
let multiplo = numMultiplicar(4);
console.log(multiplo)

//desafio 3
//01
function masaCorporal (altura, peso){
    resultado = peso /(altura*altura);
    return resultado;

}
let rest = masaCorporal(20,40);
console(rest)
https://github.com/alura-es-cursos/js-curso/blob/main/3.md




//desafio hora de practicar
//01

let listaGenerica= [];
console.log(listaGenerica)


//02
let leguajesDEProgramacion = ["JavaScrit", "C", "C++", "Kotlin", "Python"];
console.log(leguajesDEProgramacion);

//03

let leguajesDEProgramacion = ["JavaScrit", "C", "C++", "Kotlin", "Python"];
console.log(leguajesDEProgramacion);

leguajesDEProgramacion.push("Java","Ruby", "GoLand")
console.log(leguajesDEProgramacion)

//05

let leguajesDEProgramacion = ["JavaScrit", "C", "C++", "Kotlin", "Python"];
console.log(leguajesDEProgramacion);

leguajesDEProgramacion.push("Java","Ruby", "GoLand")

console.log(leguajesDEProgramacion)
let MostrarReverso= leguajesDEProgramacion.reverse();
console.log(MostrarReverso);

function calcualrSuma (lista){
    let suma = 0;
 for (let i = 0; i < lista.length; i++){
    suma += lista[i];
 }
 return suma;
}

let numeros = [6, 8, 4, 2];
let suma = calcualrSuma(numeros);
console.log(suma);
https://github.com/alura-es-cursos/js-curso/blob/main/4.md
*/

//06

