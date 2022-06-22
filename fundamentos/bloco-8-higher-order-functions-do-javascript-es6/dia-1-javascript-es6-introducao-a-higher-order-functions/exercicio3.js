const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const provaEstudante = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkTest = (gabarito, provaEstudante) => {
    if (gabarito === provaEstudante) {
        return 1;
    } else if (provaEstudante === 'N.A') {
        return 0;
    }   
    return -0.5;
}
const checkAnswers = (gabarito, provaEstudante, callback) => {
    let nota = 0;
    for (let index = 0; index <= gabarito.length; index += 1) {
        const resultado = callback(gabarito[index], provaEstudante[index]);
        nota += resultado;
    }
    return nota;
}

console.log(checkAnswers(gabarito, provaEstudante, checkTest));