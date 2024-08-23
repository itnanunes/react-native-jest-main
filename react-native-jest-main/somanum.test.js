import { expect } from '@jest/globals'
import somaMultiplos from './somanum'

describe('somaMultiplos', () => {
    test('deve retornar a soma correta dos múltiplos de 5 ou 7 abaixo de 1000', () => {
        const resultado = somaMultiplos();
        expect(resultado).toBe(156361); // Soma correta dos múltiplos de 5 ou 7 abaixo de 1000
    });
    

    test('deve retornar 0 se o limite for 1', () => {
        const resultado = somaMultiplos(1);
        expect(resultado).toBe(0); // Não há múltiplos de 5 ou 7 abaixo de 1
    });

    test('deve retornar o valor correto para um limite pequeno', () => {
        // Aqui simulamos um array menor para verificação
        const resultado = somaMultiplos(10);
        expect(resultado).toBe(12); // Múltiplos de 5 ou 7 abaixo de 10 são 5 e 7 (5 + 7 = 12)
    });
})
