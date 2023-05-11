import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MyOrg from "./components/myOrg/index"
import Equipo from './components/Equipo';

function App() {
  const [mostrarFormulario, actualizarMostrarFormulario] = useState(false);
  // const [colaboradores, actualizarColaboradores] = useState([]);
  
  const cambiarMostrarFormulario = () => {
    actualizarMostrarFormulario(!mostrarFormulario);
  }

  //registrar colaborador
 /*  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  } */



  //lista de equipos
  const equipos = [
    {titulo: "Programacion",
     colorPrimario: "#57C278",
     colorSecundario: "#D9F7E9"
    },
    {titulo: "Front End", 
     colorPrimario: "#82CFFA",
     colorSecundario: "#E8F8FF"
    },
    {titulo: "Data Science", 
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    } ,
    {titulo: "Devops", 
      colorPrimario: "#F6C54C",
      colorSecundario: "#FFF2D5"
    },
    {titulo: "UX yDiseño", 
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {titulo: "Móvil", 
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {titulo: "Innovación y Gestion", 
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }


    
  ];
  return (
    <div >
      
      <Header />
      {mostrarFormulario ? <Formulario equipos = {equipos.map((equipo) => equipo.titulo)} /> : <></>}      
      {/* {mostrarFormulario && <Formulario />} */}
      {/* <Formulario /> */}
      <MyOrg cambiarMostrarFormulario={cambiarMostrarFormulario} />
     
     {
     equipos.map((equipo, index) =>  <Equipo key={index} titulo={equipo.titulo} colorPrimario={equipo.colorPrimario} colorSecundario={equipo.colorSecundario} />)
     }
      
    </div>
  );
}

export default App;
