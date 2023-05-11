import "./equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {
    return(
    <section className="equipo" style={{ backgroundColor:props.colorSecundario }}>
        <h3 style={{ borderBottomColor: props.colorPrimario }}>
            <div className="colaboradores">{ props.titulo}</div>
        </h3>
        <div className="colaboradores">
            <Colaborador nombre="Natalia" puesto="Frontend Developer" />
        </div>

    </section>
    )
}

export default Equipo;