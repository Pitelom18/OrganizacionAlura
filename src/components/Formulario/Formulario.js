import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../campoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {
  const [valorNombre, actualizarValorNombre] = useState("");
  const [valorPuesto, actualizarValorPuesto] = useState("");
  const [valorFoto, actualizarValorFoto] = useState("");
  const [valorEquipo, actualizarValorEquipo] = useState("");

  const {registrarColaborador} = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    // console.log("Manejar el envio", e);
    console.log("Manejar el envio", valorNombre, valorPuesto, valorFoto, valorEquipo);
    
    let datosAEnviar ={
        nombre: valorNombre,
        puesto: valorPuesto,
        foto: valorFoto,
        equipo: valorEquipo
    }
    // console.log("Datos a enviar", datosAEnviar);
    registrarColaborador(datosAEnviar);//enviar datos al padre mediante la funcion registrarColaborador creada en el padre es decir en app.js

  };
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required={true}
          valor={valorNombre}
          actualizarValor={actualizarValorNombre}
        />
        <CampoTexto 
          titulo="Puesto" 
          placeholder="Ingresar puesto" 
          required 
          valor = {valorPuesto}
          actualizarValor = {actualizarValorPuesto}/>
        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor = {valorFoto}
          actualizarValor = {actualizarValorFoto}
        />
        <ListaOpciones 
        titulo="Equipo" 
        valor={valorEquipo}
        actualizarValor={actualizarValorEquipo} 
        equipos = {props.equipos}/>
        <Boton>Crear colaborador</Boton>
      </form>
    </section>
  );
};

export default Formulario;
