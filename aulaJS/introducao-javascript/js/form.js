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
    imcTd.textContent = calculaImc(peso,altura);
    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);	

    let tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});
    
titulo.addEventListener("click", function (){
    console.log("Olha só posso chamar uma funçao anomina ");
});
