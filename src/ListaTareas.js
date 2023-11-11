import React from 'react';
import Tarea from './Tarea';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada }) {
    return (
        <ul className="list-group">
          {tareas.map((tarea, index) => (
            <li key={index} className={`list-group-item ${tarea.completada ? 'list-group-item-success' : ''}`}>
              <Tarea
                tarea={tarea.texto}
                completada={tarea.completada}
                onDelete={() => eliminarTarea(index)}
                onEdit={(nuevoTexto) => editarTarea(index, nuevoTexto)}
                onToggleCompletada={() => toggleCompletada(index)}
              />
            </li>
          ))}
        </ul>
      );
      
}

export default ListaTareas;
