import { useClima } from "../hooks/useClima"
import { Formulario } from "./Formulario"
import { Resultado } from "./Resultado"
import { Snniper } from "./Snniper";


export const AppClima = () => {
  const {resultado,loading}=useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario/>
        {loading&&<Snniper/>}
        {resultado?.name&&<Resultado/>}
      </main>
    </>
  )
}
