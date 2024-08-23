function somaMultiplos(limite = 1000) {
    let soma = 0;
    for (let i = 1; i < limite; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }
    return soma;
}


// Exemplo de uso
const resultadoSoma = somaMultiplos();
console.log("A soma de todos os múltiplos de 5 ou 7 abaixo de 1000 é", resultadoSoma);

export default somaMultiplos;