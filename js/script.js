let numeroSecreto = Math.floor(Math.random() * 50) + 1;

function verificar() {
    let numero = parseInt(document.getElementById("numeroUsuario").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.textContent = "⚠️ Escribe un número válido";
        return;
    }

    if (numero === numeroSecreto) {
        resultado.textContent = "¡ADIVINASTE!";
    } else if (numero < numeroSecreto) {
        resultado.textContent = "El número es mayor";
    } else {
        resultado.textContent = "El número es menor";
    }
}

function reiniciar() {
    numeroSecreto = Math.floor(Math.random() * 50) + 1;
    document.getElementById("numeroUsuario").value = "";
    document.getElementById("resultado").textContent = "";
}
