const form = document.getElementById('agregarForm');
const tareaLista = document.getElementById('tareaLista');
const eliminarCompletadas = document.getElementById('eliminarCompletadas');

form.addEventListener('submit', function (event){
    event.preventDefault();

    const nuevaTarea = document.getElementById('tarea').value;

    const nuevaTareaLi = document.createElement('li');
    nuevaTareaLi.innerText = nuevaTarea;

    nuevaTareaLi.addEventListener('click', function(){
        nuevaTareaLi.classList.toggle('completada');
    });

    tareaLista.appendChild(nuevaTareaLi);

    document.getElementById('tarea').value = ' ';

    eliminarCompletadas.addEventListener('click', function(){
        const tareasCompletadas = document.querySelectorAll('completada');
    
        tareasCompletadas.forEach(function(tareaCompletada){
            tareaCompletada.remove();
            
        });
    });
});
