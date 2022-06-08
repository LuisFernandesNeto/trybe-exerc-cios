const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const compareNumbers = (a, b) => {
    if (a == b) return 0;
    if (a < b) return -1;
    if (a > b) return 1;
}

oddsAndEvens.sort(compareNumbers);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);