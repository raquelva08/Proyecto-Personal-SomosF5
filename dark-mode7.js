const botonSelector = document.getElementById("selector-tema");
// Creo una constante para llamar directamente el boton en una función

const elementoBody = document.body;
// Esta constante hace referencia directamente a la etiqueta/elemento body, y luego se le puede añadir o quitar la clase

function actualizarTexto(){
    const estaEnModoOscuro = elementoBody.classList.contains("dark-mode");
    //Este classList busca en CSS la clase dark-mode
    botonSelector.textContent = estaEnModoOscuro ? "Cambiar a modo claro ☀️" : "Cambiar a modo oscuro 🌙";
    // El sigo ? actua como un if else, si es true elige la primera opcion y si es false elige la segunda (la que sigue los dos puntos : )
    // &#9728; &#65039 para el sol en html
}

//Esto que pongo aquí abajo es lo mismo que arriba en la funcion pero sin simplificar.
// if (estaEnModoOscuro) {
//     Si la condicion es TRUE (está en modo oscuro)
//     botonSelector.textContent = "Cambiar a modo claro &#9728";
//     Si la condicion es FALSE (está en modo claro)
// } else {
//     botonSelector.textContent = "Cambiar a modo oscuro 🌙";
// }

function alterarModo(){
    elementoBody.classList.toggle("dark-mode");
    actualizarTexto();
}
// Esto activa o desactiva el dark-mode.

botonSelector.addEventListener("click", alterarModo);

//Esto es cuando hay un evento click

actualizarTexto();