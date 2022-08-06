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
        pesoehvalido = false;
        tdimc.textContent = "peso invalido!"
        paciente.classList.add("paciente-invalido")
    }
    if(altura < 0 || altura > 3.00){
        alturaehvalida = false;
        tdimc.textContent = "altura invalida!";
        paciente.classList.add("paciente-invalido")

    }
    
    if( alturaehvalida && pesoehvalido){
        let imc = peso / (altura * altura);
        tdimc.textContent = imc.toFixed(2);
    }
}

let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    
    let form = document.querySelector("#form-adiciona")
    
    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;

    let pacienteTr = document.createElement("Tr");

    let nomeTd = document.createElement("Td");
    let pesoTd = document.createElement("Td");
    let alturaTd = document.createElement("Td");
    let gorduraTd = document.createElement("Td");
    let imcTd = document.createElement("Td");
    
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    let tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});
    
titulo.addEventListener("click", function (){
    console.log("Olha só posso chamar uma funçao anomina ");
});

