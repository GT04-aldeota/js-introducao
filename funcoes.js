// // let nome = "Bruna";

// // function nomeDaFuncao(){
// //     let nome = "Dany";
// //     console.log(nome);
// //     nomeDaFuncao2(nome)
// // }
// // function nomeDaFuncao2(nome){
// //     console.log(nome);
// // }

// // nomeDaFuncao()

// function boasVindas(nome){
//     console.log(`Seja bem-vindo(a) ${nome ? nome : ""}`);
// }
// function boasVindas(nome = ""){
//     console.log(`Seja bem-vindo(a)${nome ? `, ${nome}!` : "."}`);
// }

// // boasVindas("Uriel")

// function soma(a = 0, b = 0){
//     return a+b;
// }

// console.log(`O resultado de 2+2 é = ${soma(2,2)}`);

// function apresentacao(nome = "", idade = null){
//     console.log(`Oi ${nome}, ${idade}`);
// }

// apresentacao("Joe", 35);
// apresentacao("_", 36);

// function procurar(termo, letra){
//     let verdadeiro = false;
//     for(let i = 0; i < termo.length; i++){
//         if(termo[i] == letra){
//             verdadeiro = true;
//         }
//     }
//     return verdadeiro;
// }
// console.log(procurar("Paulo", "b"))

// Funções de tipo string
// "string".includes("termo") retorna um boleano true/false caso encontre ou não o termo na string
// console.log("Paulo".includes("ua")); 

// console.log("PAulo".toLowerCase());
// console.log("PAulo".toUpperCase());
// console.log("Tres prateos de trigo para tres tigres tristes".repeat(3));
// console.log("PAulo".replace("lo", "la"));
// console.log("O rato roeu a roupa do rei de roma".replace("r", "l"));
// console.log("teste".indexOf("a"));
// console.log("matheus, thiago, bruna, joenes".split(","));
// console.log("Gleidson".substring(3,5));
// console.log("Gleidson".slice(3,5));


// Funções de tipo number
// let numero = 123.56;
// console.log(numero.toFixed(1))
// console.log(numero.toString())

// Funções de tipo array
let meses = ["jan","fev","mar"];
// function inserirOption(valor){
//     console.log(`<option>${valor}</option>`);
// }
// meses.map(inserirOption);
// meses.map((mes, posicao, lista) => {
//     console.log(`<option>${posicao}-${mes}, ${lista.toString()}</option>`);
// });
// console.log(meses.filter((mes) => {
//     return mes.includes("a")
// }));
// console.log(meses.filter((mes) => mes.includes("a")
// ));
// console.log(meses.find((mes) => {
//     return mes.includes("ar")
// }));
// console.log([1,2,3,4,5,6].reduce((total, numero) => {
//     return total + numero
// }, 0));

// console.log(["juan", "tai", "lucas"].join("/"));
// console.log([2,5,23,12,1].sort((a, b) => { return b - a}));
// console.log([2,5,23,12,1].toSorted((a, b) => { return b - a}));
// console.log(["juan", "tai", "lucas"].reverse());
// console.log(["A", "A", "A"].every((tipo) => tipo == "A"));
// console.log(["A", "A", "B"].some((tipo) => { return tipo == "B" }));

// console.log("2026-10-01".split("-").reverse().join("/"));

// function teste(nome, email, ...etc){
//     console.log(`${nome}, ${email}`);
//     etc.map(e => console.log(e))
// }

// teste("gleidson", "g@e.com", 36, "masculino")

let pessoa = {
    nome: "bruna"
}
console.log(pessoa);

let aluno = {
    ...pessoa,
    idade: 22,
    curso: "FullStack"
}
console.log(aluno);
let { nome } = aluno;
console.log(nome);  







