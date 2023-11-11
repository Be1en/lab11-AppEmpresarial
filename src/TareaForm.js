import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === "") return;
    agregarTarea(texto);
    setTexto("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <div className="input-group m-3">
        <input
          type="text"
          className="form-control"
          placeholder="Añadir tarea..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
          <button type="submit" className="btn btn-primary ">Agregar Tarea</button>

      </div>
    </form>
  );
  
}

export default TareaForm;
