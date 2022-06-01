/* let button = document.getElementById("button");

button.addEventListener("click", function(event) {
    event.preventDefault()
}) */

let nome = document.getElementById("nome");
let email = document.getElementById("email");
let button = document.getElementById("button");

    button.addEventListener("click", function() {
        if (nome.innerText > 40 && email.innerText < 10 && email.innerText > 50) {
            alert("Dados Inválidos");
        } else {
            alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.");
        }
    })
    
