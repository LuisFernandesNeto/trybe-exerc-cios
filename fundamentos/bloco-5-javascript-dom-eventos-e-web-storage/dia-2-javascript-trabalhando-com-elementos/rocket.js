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

let removeFilho = document.getElementById("pai");   
let filhoRemovido = document.getElementById("primeiroFilho");

removeFilho.removeChild(filhoRemovido);

let filhoRemovido2 = document.getElementById("terceiroFilho");
removeFilho.removeChild(filhoRemovido2);

let filhoRemovido3 = document.getElementById("quartoEUltimoFilho");
removeFilho.removeChild(filhoRemovido3);

let filhoRemovido4 = document.getElementById("quintoFilho");
removeFilho.removeChild(filhoRemovido4);

let removeFilho2 = document.getElementById("elementoOndeVoceEsta");  
let filhoRemovido5 = document.getElementById("segundoEUltimoFilhoDoFilho");
removeFilho2.removeChild(filhoRemovido5);

let filhoRemovido6 = document.getElementById("terceiroFilhoDoFilho");
removeFilho2.removeChild(filhoRemovido6);

console.log(document.getElementById("pai"));