function gerarNumerosMegaSenaBasico() {
    const numeros = [];
    while (numeros.length < 6) {
        const numero = Math.floor(Math.random() * 60) + 1;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }
    return numeros;
}

function gerarNumerosMegaSenaOtimizado() {
    const numeros = new Set();
    while (numeros.size < 6) {
        numeros.add(Math.floor(Math.random() * 60) + 1);
    }
    return Array.from(numeros);
}

const inicioBasico = performance.now();
gerarNumerosMegaSenaBasico();
const fimBasico = performance.now();
const tempoBasico = fimBasico - inicioBasico;

const inicioOtimizado = performance.now();
gerarNumerosMegaSenaOtimizado();
const fimOtimizado = performance.now();
const tempoOtimizado = fimOtimizado - inicioOtimizado;

const melhoriaPercentual = ((tempoBasico - tempoOtimizado) / tempoBasico) * 100;
console.log(`A função otimizada é ${melhoriaPercentual.toFixed(2)}% mais rápida.`);