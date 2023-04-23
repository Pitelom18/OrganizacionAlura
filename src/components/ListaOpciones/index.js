import "./ListaOpciones.css"

const ListaOpciones = () =>{

    /* Para recorrer un arreglo en react no usamos array.forEach() sino que usamos array.map((equipo,index) => {
        return <option key={index}>{equipo}</option>
    }; */

    const equipos = ["Programacion",
                     "Front End", 
                     "Data Science",
                     "Devops", 
                     "UX yDiseño",
                     "Móvil", 
                     "Innovación y Gestion"]

    
    return(
        <div className="lista-opciones">
            <label>Equipos</label>
            <select> 
            {equipos.map((equipo,index) => <option key={index}>{equipo}
            </option>)}               
                {/* esto se puede reducir en una sola linea cuando solo devolvemos una sola linea ---- 
                {equipos.map((equipo,index) => {
                    return <option key={index}>{equipo}</option>
                })} --- Se quitan las llaves despues del arrow y el return*/}
            </select>
        </div>
    )
}

export default ListaOpciones