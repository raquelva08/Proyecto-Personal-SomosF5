// Creamos selectores para obtener los elementos del DOM
const tareaInput = document.getElementById("tarea_input");
const botonAgregar = document.getElementById("agregarTarea");
const listaTarea = document.getElementById("tareaLista");

// Eventos principales
//addEventListener es un metodo para llamar a un evento, llama a una función (cargarTareas en este caso)
//DOMContentLoaded esto significa que todo lo que hay en HTML cárgamelo
document.addEventListener("DOMContentLoaded", cargarTareas);
botonAgregar.addEventListener("click", agregarNuevaTarea);

// Permitir agregar tarea al presionar Enter
tareaInput.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        agregarNuevaTarea();
    }
});


// Creamos las funciones - La lógica de la aplicación (JS)

function agregarNuevaTarea(){
    const tareaText= tareaInput.value.trim();
    if(tareaText){
        crearElementoTarea(tareaText);
        guardarTarea(tareaText);
        tareaInput.value = "";
        //Esto nos ayuda a vaciar el input (tareaInput.value = "";)
    }
}
//trim elimina todos los espacios en blanco tanto por la derecha como por la izquierda

// La función central para crear los elementos <li> y sus botones
//isCompleted tiene como valor por defecto false, de lo contrario todas las tareas se marcarán como completadas
function crearElementoTarea(tareaText, isCompleted = false){
    const li = document.createElement("li");
    li.className="task-item";
    //Aquí estamos creando un elemento li con la clase task-item
    li.setAttribute("data-text", tareaText)
    //Este metodo ayuda a guardar datos en el DOM y lo identifique como un dato
    if(isCompleted) li.classList.add("completed");
    
    li.innerHTML = `
        <span>${tareaText}</span>
        <button class="completed-btn">✓</button>
        <button class="delete-btn">X</button>`;
    li.querySelector(".completed-btn").addEventListener("click", completarTarea);
    li.querySelector(".delete-btn").addEventListener("click", eliminarTarea);

    listaTarea.appendChild(li);
    //Esto es para crear el hijo li y lo agregamos a listaTarea que es un ul
}

function completarTarea(event) {
    const li = event.target.parentElement;
    // El <li> es el padre del botón
    li.classList.toggle("completed");
    //Esto lo activa o lo desactiva (toggle)
    actualizarEstadoTarea(li.getAttribute("data-text"));
}

function eliminarTarea(event) {
    const li = event.target.parentElement; // El <li> es el padre del botón
    const tareaText = li.getAttribute("data-text");

    listaTarea.removeChild(li);
    borrarTarea(tareaText);
}

const obtenerTareas = () => JSON.parse(localStorage.getItem('tasks')) || [];

function cargarTareas(){
    obtenerTareas().forEach(task => crearElementoTarea(task.text, task.completed));
}

function guardarTarea(tareaText){
    const tasks = obtenerTareas();
    tasks.push({text:tareaText, completed:false});
    localStorage.getItem("tasks", JSON.stringify(tasks));
}

function actualizarEstadoTarea(tareaText){
    let tasks = obtenerTareas();
    //Usamos "map" para crear un nuevo array con el estado actualizado.
    tasks = tasks.map(task => 
        task.text === tareaText 
            ? { ...task, completed: !task.completed } // Cambia el estado
            : task // Mantiene las demás tareas igual
    );
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function borrarTarea(tareaText){
    //Usamos "filter" para crear un nuevo array sin la tarea eliminada.
    const tasks = obtenerTareas().filter(task => task.text !== tareaText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
