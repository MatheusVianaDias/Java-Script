document.querySelector(".titulo");
let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){
    
    let paciente = pacientes[i]

    let tdpeso = paciente.querySelector(".info-peso");
    let peso = tdpeso.textContent;
    
    let tdaltura = paciente.querySelector(".info-altura")
    let altura = tdaltura.textContent;
    
    
    let tdimc = paciente.querySelector(".info-imc");
    
    let pesoehvalido = true;
    let alturaehvalida = true;
    
    if(peso < 0 || peso > 1000){
        console.log("peso invalido");
        pesoehvalido = false;
        tdimc.textContent = "peso invalido!"
        paciente.classList.add("paciente-invalido")
    }
    if(altura < 0 || altura > 3.00){
        console.log("altura invalida")
        alturaehvalida = false;
        tdimc.textContent = "altura invalida!";
        paciente.classList.add("paciente-invalido")

    }
    
    if( alturaehvalida && pesoehvalido){
        let imc = peso / (altura * altura);
        tdimc.textContent = imc.toFixed(2);
    }
}
    

