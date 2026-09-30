function mostrarDataHora() {
    let data = new Date();
    console.log(data.toLocaleString());
    console.log(data.getFullYear());
}

// mostrarDataHora()

function imprimirTabuada(numero = 0) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} X ${i} = ${numero * i}`);
    }
}

// imprimirTabuada(5)

function verificarIntervalo(numero = 0) {
    if (numero >= 10 && numero <= 50) {
        console.log(`${numero} Está no intervalo de 10 à 50`);
    } else {
        console.log(`${numero} Está fora intervalo de 10 à 50`);
    }
}

// verificarIntervalo()
// verificarIntervalo(10)
// verificarIntervalo(25)
// verificarIntervalo(75)

function quadrado(numero){
    return numero*numero;
}

console.log(quadrado(2))
console.log(quadrado(6))
console.log(quadrado(8))