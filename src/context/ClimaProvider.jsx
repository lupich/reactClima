import axios from "axios";
import {useState,createContext} from "react";

export const ClimaContext=createContext();
export const ClimaProvider=({children})=>{
  const [busqueda, setBusqueda] = useState({
    ciudad:'',
    pais:'',
  });
  const [resultado, setResultado] = useState({});
  const [loading, setLoading] = useState(false);
  const datosBusqueda=(e)=>{
    setBusqueda(
      {
        ...busqueda,
        [e.target.name]:e.target.value
      }
    )
  }
  const consultarDatos=async (datos)=>{
    setLoading(true)
    try {
      const {ciudad,pais}=datos;
      const appApi=import.meta.env.VITE_API_KEY;
      const url=`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appApi}`;

      const {data}=await axios(url)
      const {lat,lon}=data[0]

      const urlClima=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appApi}`;
      const {data:dataClima}=await axios(urlClima);
      setResultado(dataClima);
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  return(
    <ClimaContext.Provider
      value={{
        busqueda,
        datosBusqueda,
        consultarDatos,
        resultado,
        loading,
      }}

    >
      {children}
    </ClimaContext.Provider>
  )

}