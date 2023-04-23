
import "./myOrg.css"


const MyOrg = (props) => {
//Estado - hooks: useState... import {useState} from "react". 
//Debemos usar useState() para poder usar el estado en el componente
//ej:const [nombre, actualizarNombre] = useState("valor inicial") = const [nombreVariable, funcionQueActualizaElEstado] = useState("valor inicial")
    console.log(props);

    return(
        <section className="orgSection">
            <h3>Mi Organizacion</h3>
            <img src = "/img/add.png" alt="Añadir" onClick ={props.cambiarMostrarFormulario}></img>
        </section>
    )
};

export default MyOrg;