// function calcularIdade(){
//     let idade = document.querySelector("#idade").value;
    
//     if(idade.length > 0){
//         if(idade >= 18){
//             alert("Maior de idade");
//         } else {
//             alert("Menor de idade");
//         }
//     } else {
//         alert("Digite um numero válido")
//     }
// }

// let numero = -10;

// if(numero > 0){
//     console.log("É Positivo");
// } else if(numero < 0){
//     console.log("É Negativo");
// } else {
//     console.log("É Zero");
// }

// let numero = 4;

// if(numero % 2 == 0){
//     console.log(`o numero ${numero} é par`);
// } else{
//     console.log(`o numero ${numero} é impar`);
// }

// let notaA = 7;
// let notaB = 5;
// let notaC = 2;
// let media = (notaA + notaB + notaC) / 3;
// console.log(`Sua média é: ${media.toFixed(1)}`);
// if(media >= 7){
//     console.log("Aprovado");
// } else if(media < 7 && media >= 5 ){
//     console.log("Está de recuperação");
// } else {
//     console.log("Está de reprovado");
// }

// let valor = 250;
// let porcentagem = 20;
// let desconto = (valor * porcentagem) / 100;

// if(valor >= 100){
//     console.log(`Sua compra de R$ ${valor} recebeu um desconto de ${porcentagem}%, e ficou R$ ${valor - desconto}`);
// } else {
//     console.log(`O total da compra é R$ ${valor}`);   
// }

// let numero = 25;

// if(numero >= 10 && numero <= 50){
//     console.log("Está no intervalo de 10 à 50");
// }else{
//     console.log("Está fora intervalo de 10 à 50");
// }

let ano = 2024;

if(ano % 400 == 0 && ano % 100 == 0){
    console.log(`${ano} é bissexto`);
} else if(ano % 4 == 0 && ano % 100 != 0){
    console.log(`${ano} é bissexto`);
}else {
    console.log(`${ano} não é bissexto`);
}

let semaforo = "verde";
switch (semaforo) {
    case "verde":
        console.log("Siga em frente");
    break;
    case "amarelo":
        console.log("Diminua a velocidade");
    break;
    case "vermelho":
        console.log("Pare");
    break;

    default:
        console.log("Semaforo com defeito");
        break;
}

(2 % 2 == 0) ? console.log("Par") : console.log("Impar")
