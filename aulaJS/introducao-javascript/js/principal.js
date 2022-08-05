document.querySelector(".titulo");
let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let paciente = document.querySelector("#primeiro-paciente");
let tdpeso = paciente.querySelector(".info-peso");
let tdaltura = paciente.querySelector(".info-altura")

let altura = tdaltura.textContent;
let peso = tdpeso.textContent;

let tdimc = paciente.querySelector(".info-imc");

let pesoehvalido = true;
let alturaehvalida = true;

if(peso < 0 || peso > 100){
    console.log("peso invalido");
    pesoehvalido = false;
    tdimc.textContent = "peso invalido!"
}
if(altura < 0 || altura > 3.00){
    console.log("altura invalida")
    alturaehvalida = false;
    tdimc.textContent = "altura invalida!"
}

if( alturaehvalida && pesoehvalido){
    let imc = peso / (altura * altura);
    tdimc.textContent = imc;
}



