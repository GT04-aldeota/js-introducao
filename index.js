
let nome = "Bruna"; //String
console.log(nome);
nome = "Danielly";
console.log(nome);

const PI = 3.14; //Number
console.log("Valor de PI:", PI);
let eProfessor = true; //Boolean
console.log(eProfessor);
eProfessor = false;
console.log(eProfessor);

let alunos = ["Juan", "Gabriel", "Uriel"]; //Array de strings
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

let aluno = {
    nome: "Joe",
    email: "joe@email.com",
    genero: "masculino"
} //Object
console.log(aluno);
console.log(aluno.nome);
console.log(aluno.email);
console.log(aluno.genero);
console.log(`Nome: ${aluno.nome}`);

//operadores de atribuição
// = atribuidor ou recebe
// += atribuidor incremental
let num = 0;
num = num + 2;
console.log(num);
num += 2;
console.log(num);
// -= atribuidor decremental
// /= atribuidor de divisão
// *= atribuidor de multiplicação

// operadores aritmeticos
console.log("2+2=", 2+2);
console.log("2-2=", 2-2);
console.log("2/2=", 2/2);
console.log("2*2=", 2*2);
console.log("100%3=", 100%3);

// operadores de comparação
console.log("2 == 2: ", 2 == 2); // igual
console.log("2 != 2: ", 2 != 2); // diferente
console.log("2 > 2: ", 2 > 2); // maior que
console.log("2 < 2: ", 2 < 2); // menor que
console.log("2 >= 2: ", 2 >= 2); // maior ou igual que
console.log("2 <= 2: ", 2 <= 2); // menor ou igual que
console.log("2 === 2: ", 2 === 2); // estritamente igual
console.log("2 === '2': ", 2 === "2"); // estritamente igual
console.log("'2' === '2': ", "2" === "2"); // estritamente igual
console.log("2 !== 2: ", 2 !== 2); // estritamente diferente
console.log("2 !== '2': ", 2 !== "2"); // estritamente diferente
console.log("'2' !== '2': ", "2" !== "2"); // estritamente diferente

// operadores lógicos
// ! negação, inverte o valor de um boleano
console.log(!true); // false
console.log(!false); // true

// || ou logico
console.log("2 > 3 || 3 > 2: ",2 > 3 || 3 > 2);
console.log("2 > 3 || 1 > 2: ",2 > 3 || 1 > 2);
// && ou logico
console.log("2 > 3 && 3 > 2: ",2 > 3 && 3 > 2);
console.log("4 > 3 && 3 > 2: ",4 > 3 && 3 > 2);





// let root = document.querySelector("#root");
// root.innerHTML = `<h1 onclick="${alert("Clicou")}">Olá mundo</h1>`;
// root.innerHTML += "<h2>oi Uriel</h2>";
