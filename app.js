const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos= document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigos() {
    if (!inputAmigo.value) {
        alert("Debes ingresar un nombre");
        return;
    }

    const nuevoAmigo = inputAmigo.value;

    
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(nuevoAmigo)) {
        alert("El nombre debe contener solo letras y espacios");
        return;
    }

    listaAmigos.push(nuevoAmigo);
    ulListaAmigos.innerHTML += `<li>${nuevoAmigo}</li>`;
    inputAmigo.value = '';
}

function sortearAmigo(){
    const random = Math.floor(Math.random()*listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo Secreto es :  ${amigoSecreto}</li>`;
}