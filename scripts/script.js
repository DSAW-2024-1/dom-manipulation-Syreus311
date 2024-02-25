console.log("JavaScript working!");
const listaTareas = document.getElementById("lista-tareas");
const nuevaTarea = document.getElementById("nueva-tarea");
const agregarTarea = document.getElementById("agregar-tarea");

// Agregar una nueva tarea
agregarTarea.addEventListener("click", () => {
    if (nuevaTarea.value === "") {
        return;
    }

    const nuevaTareaLi = document.createElement("li");
    nuevaTareaLi.textContent = nuevaTarea.value;

    // Botón para eliminar la tarea
    const eliminarTareaBtn = document.createElement("button");
    eliminarTareaBtn.textContent = "X";
    eliminarTareaBtn.addEventListener("click", () => {
        nuevaTareaLi.remove();
    });

    nuevaTareaLi.appendChild(eliminarTareaBtn);

    // Agregar la nueva tarea a la lista
    listaTareas.appendChild(nuevaTareaLi);

    // Limpiar el campo de texto
    nuevaTarea.value = "";
});

// Marcar una tarea como completada
listaTareas.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completada");
    }
});
