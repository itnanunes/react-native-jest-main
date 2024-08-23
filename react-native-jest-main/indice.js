function encontrarIndicesMaiorMenor(array) {
    let maiorValor = array[0];
    let menorValor = array[0];
    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorValor) {
            maiorValor = array[i];
            indiceMaior = i;
        }
        if (array[i] < menorValor) {
            menorValor = array[i];
            indiceMenor = i;
        }
    }

    return { indiceMaior, indiceMenor };
}

// Exemplo de uso
const numeros = [10, 5, 23, 8, 15];
const { indiceMaior, indiceMenor } = encontrarIndicesMaiorMenor(numeros);
console.log("Maior valor está no índice", indiceMaior, "e o menor valor está no índice", indiceMenor);


export default encontrarIndicesMaiorMenor;