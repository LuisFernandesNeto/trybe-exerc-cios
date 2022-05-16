// Bônus 1

n = 5;
aux = "";

for (let linha = 1; linha <= n; linha += 1) {
    for (let coluna = 1; coluna <= n; coluna += 1) {
        aux += "*";    
    }
    console.log(aux);
    aux = "";
}

// Bônus 2

n = 5;
aux = "";

for (let linha = 1; linha <= n; linha += 1) {
    for (let coluna = 1; coluna <= n; coluna += 1) {
        if(coluna == linha) {
        aux += "*";
        }    
    }
    console.log(aux);
}