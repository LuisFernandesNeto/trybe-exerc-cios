const isSorteado = (numero, numero2) => numero === numero2;

const sorteio = (numero, callback) => {
    const numero2 = Math.floor((Math.random() * 5) + 1);
    return callback(numero, numero2) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(sorteio(2, isSorteado));