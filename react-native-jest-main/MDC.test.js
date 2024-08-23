import { expect } from '@jest/globals'
import calcularMDC from './MDC'

describe('calcularMDC', () => {
    test('deve calcular o MDC corretamente para dois números positivos', () => {
        const resultado = calcularMDC(44, 55);
        expect(resultado).toBe(11); // MDC de 44 e 55 é 11
    });

    test('deve retornar o próprio número quando um dos números for 0', () => {
        const resultado = calcularMDC(44, 0);
        expect(resultado).toBe(44); // MDC de 44 e 0 é 44

        const resultado2 = calcularMDC(0, 55);
        expect(resultado2).toBe(55); // MDC de 0 e 55 é 55
    });

    test('deve calcular o MDC corretamente para números negativos', () => {
        const resultado = calcularMDC(-44, 55);
        expect(resultado).toBe(11); // MDC de -44 e 55 é 11

        const resultado2 = calcularMDC(44, -55);
        expect(resultado2).toBe(11); // MDC de 44 e -55 é 11
    });

    test('deve calcular o MDC corretamente quando ambos os números são negativos', () => {
        const resultado = calcularMDC(-44, -55);
        expect(resultado).toBe(11); // MDC de -44 e -55 é 11
    });

    test('deve calcular o MDC de números primos', () => {
        const resultado = calcularMDC(13, 17);
        expect(resultado).toBe(1); // MDC de 13 e 17 é 1
    });

    test('deve calcular o MDC de números iguais', () => {
        const resultado = calcularMDC(25, 25);
        expect(resultado).toBe(25); // MDC de 25 e 25 é 25
    });
});
