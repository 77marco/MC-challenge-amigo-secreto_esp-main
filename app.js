// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Creación de un array para almacenar los nombres de los amigos.
let amigos = [];

// Implementación de la función para agregar amigos.
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo.trim() === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    amigos.push(nombreAmigo);
    actualizarListaAmigos();
    document.getElementById('amigo').value = '';
}

// Implementación de la función para actualizar la lista de amigos.
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

// Implementación de la función para sortear a los amigos.
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debes agregar al menos dos amigos para poder sortear.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>`;
}