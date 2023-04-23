import "./Formulario.css"
import CampoTexto from "../campoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"


const Formulario = () => {

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio", e)
    }
    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador</h2>                              
                <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required={true} />
                <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required />
                <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required />
                <ListaOpciones titulo="Equipo" />
                <Boton>
                    Crear colaborador
                </Boton>
                

            </form>
        </section>
    )
}

export default Formulario