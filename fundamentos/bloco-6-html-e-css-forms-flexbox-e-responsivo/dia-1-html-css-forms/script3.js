/* let button = document.getElementById("button");

button.addEventListener("click", function(event) {
    event.preventDefault()
}) */

let nome = document.getElementById("nome").innerText;
let email = document.getElementById("email").innerText;
let button = document.getElementById("button");

    button.addEventListener("click", function() {
        if (nome.length > 40 && email.length < 10 && email.length > 50) {
            alert("Dados Inválidos");
        } else {
            alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.");
        }
    })
    
