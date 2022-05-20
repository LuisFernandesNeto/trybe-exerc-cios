console.log(document.getElementById("elementoOndeVoceEsta"));

console.log(document.getElementById("elementoOndeVoceEsta").parentElement.style.color = "red");

console.log(document.getElementById("primeiroFilhoDoFilho").innerText = " Zooboomafu");

console.log(document.getElementById("pai").firstElementChild);

console.log(document.getElementById("elementoOndeVoceEsta").previousElementSibling);

console.log(document.getElementById("elementoOndeVoceEsta").firstElementChild);

console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

console.log(document.getElementById("pai").firstElementChild.nextElementSibling);

// 2

let filho = document.getElementById("pai");

let quintoFilho = document.createElement("section");
quintoFilho.id = "quintoFilho";

console.log(filho.appendChild(quintoFilho));

let filhoDoFilho = document.getElementById("elementoOndeVoceEsta");

let terceiroFilhoDoFilho = document.createElement("section");
terceiroFilhoDoFilho.id = "terceiroFilhoDoFilho";

console.log(filhoDoFilho.appendChild(terceiroFilhoDoFilho));

console.log(document.getElementById("pai"));

let Neto = document.getElementById("primeiroFilhoDoFilho");

let Neto1 = document.createElement("section");
Neto1.id = "neto";

Neto.appendChild(Neto1);

console.log(document.getElementById("neto").parentElement.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling);

// 3

let removeFilho = document.getElementById("primeiroFilho");
console.log(removeFilho);

removeFilho.removeChild();
