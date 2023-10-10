import { useClima } from "../hooks/useClima"


export const Resultado = () => {
  const {resultado}=useClima();
  const {name,main}=resultado;
  const kelvin= 273.15;
  return (
    <div className="contenedor">
      <h2 className="l">El Clima de {name} es </h2>
      <p>
        Temperatura Actual: {parseInt(main.temp -kelvin)} <span>&#x2103;</span>
      </p>
      <p>
        Temperatura minima: {parseInt(main.temp_min -kelvin)} <span>&#x2103;</span>
      </p>
      <p>
        Temperatura maxima: {parseInt(main.temp_max -kelvin)} <span>&#x2103;</span>
      </p>
    </div>
  )
}
