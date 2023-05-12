import "./equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {
  //Destructuracion de props
  const { colaboradores } = props;

  return (
    <>
      {colaboradores.length > 0 && (
        <section
          className="equipo"
          style={{ backgroundColor: props.colorSecundario }}
        >
          <h3 style={{ borderBottomColor: props.colorPrimario }}>
            <div className="colaboradores">{props.titulo}</div>
          </h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                key={index}
                nombre={colaborador.nombre}
                puesto={colaborador.puesto}
                foto={colaborador.foto}
                colorPrimario={props.colorPrimario}
                
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
