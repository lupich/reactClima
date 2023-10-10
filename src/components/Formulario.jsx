import { useState } from "react";
import { useClima } from "../hooks/useClima"


export const Formulario = () => {
  const [alerta, setAlerta] = useState('')
  const{busqueda,datosBusqueda,consultarDatos}=useClima();
  const {ciudad,pais}=busqueda;
  const handleSubmit=e=>{
    e.preventDefault();
    if(Object.values(busqueda).includes('')){
      setAlerta('Todo los campos son obligatorios');
      return
    }
    consultarDatos(busqueda)
  }
  return (
    <div className="contenedor">
      {alert&& <p>{alerta}</p> }
      <form action=""
      onSubmit={handleSubmit}
      >
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input 
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
          />
        </div>

        <div className="campo">
          <label htmlFor="pais">País</label>
          <select 
            id="pais"
            name="pais"
            onChange={datosBusqueda}
            value={pais}
          >
            <option value=""> Seleccione País</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
        </div>

        <input 
          type="submit"
          value="Consultar Clima"
        />
      </form>
    </div>

  )
}
