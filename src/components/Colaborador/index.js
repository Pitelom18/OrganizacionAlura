import "./colaborador.css"

const Colaborador = (props) => {
return(
    <div className="colaborador">
        <div className="encabezado">
            <img src="https://avatars.githubusercontent.com/u/88055463?s=400&u=5cfedef707b3e77d3889b5e0bfd13317ff2d20c9&v=4"  alt="foto natalia"/>
        </div>
        <div className="info">
            <h4>{ props.nombre }</h4>
            <h5>{ props.puesto }</h5>

        </div>
    </div>

)
}

export default Colaborador;