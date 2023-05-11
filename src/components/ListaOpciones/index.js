import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  /* Para recorrer un arreglo en react no usamos array.forEach() sino que usamos array.map((equipo,index) => {
        return <option key={index}>{equipo}</option>
    }; */

  

  const manejarCambio = (e) => {
    // console.log("cambio", e.target.value);
    props.actualizarValor(e.target.value);
  }

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value ={props.valor} onChange={manejarCambio}>
        <option 
          value=" " 
          disabled 
          defaultValue=" " 
          hidden>          
          Seleccionar equipo
        </option>
        {props.equipos.map((equipo, index) => (<option key={index}>{equipo}</option>))}


       {/*  {equipos.map((equipo, index) => (
          <option key={index}>{equipo}</option>
        ))} */}
        {/* esto se puede reducir en una sola linea cuando solo devolvemos una sola linea ---- 
                {equipos.map((equipo,index) => {
                    return <option key={index}>{equipo}</option>
                })} --- Se quitan las llaves despues del arrow y el return*/}
      </select>
    </div>
  );
};

export default ListaOpciones;
