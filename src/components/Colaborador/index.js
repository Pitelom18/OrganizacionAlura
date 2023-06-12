import "./colaborador.css"
import { AiFillCloseCircle } from "react-icons/ai"

const Colaborador = (props) => {

    //Destructuracion de props
    const {nombre, puesto, foto} = props.datos
    const {colorPrimario, eliminarColaborador} = props;
return(
    <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={eliminarColaborador}/>
        <div className="encabezado" style = {{ backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{ nombre }</h4>
            <h5>{ puesto }</h5>
        </div>
    </div>

)
}

export default Colaborador;