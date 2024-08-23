import { expect } from '@jest/globals'
import encontrarIndicesMaiorMenor from './indice'


describe('encontrarIndicesMaiorMenor', () => {
    test('deve retornar os índices corretos para o maior e menor valor', () => {
        const numeros = [10, 5, 23, 8, 15];
        const { indiceMaior, indiceMenor } = encontrarIndicesMaiorMenor(numeros);

        expect(indiceMaior).toBe(2); // O maior valor (23) está no índice 2
        expect(indiceMenor).toBe(1); // O menor valor (5) está no índice 1
    });

    test('deve funcionar corretamente com todos os valores iguais', () => {
        const numeros = [10, 10, 10];
        const { indiceMaior, indiceMenor } = encontrarIndicesMaiorMenor(numeros);

        expect(indiceMaior).toBe(0); // Qualquer índice pode ser o maior quando todos os valores são iguais
        expect(indiceMenor).toBe(0); // Qualquer índice pode ser o menor quando todos os valores são iguais
    });

    test('deve funcionar com um array de um único elemento', () => {
        const numeros = [42];
        const { indiceMaior, indiceMenor } = encontrarIndicesMaiorMenor(numeros);

        expect(indiceMaior).toBe(0); // O único valor está no índice 0
        expect(indiceMenor).toBe(0); // O único valor está no índice 0
    });

    test('deve retornar o índice correto se o menor valor for o último elemento', () => {
        const numeros = [20, 30, 50, 10];
        const { indiceMaior, indiceMenor } = encontrarIndicesMaiorMenor(numeros);

        expect(indiceMaior).toBe(2); // O maior valor (50) está no índice 2
        expect(indiceMenor).toBe(3); // O menor valor (10) está no índice 3
    });

    test('deve retornar o índice correto se o maior valor for o último elemento', () => {
        const numeros = [20, 30, 10, 50];
        const { indiceMaior, indiceMenor } = encontrarIndicesMaiorMenor(numeros);

        expect(indiceMaior).toBe(3); // O maior valor (50) está no índice 3
        expect(indiceMenor).toBe(2); // O menor valor (10) está no índice 2
    });
});
