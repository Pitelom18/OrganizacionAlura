import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MyOrg from "./components/myOrg/index"

function App() {
  const [mostrarFormulario, actualizarMostrarFormulario] = useState(true);
  const cambiarMostrarFormulario = () => {
    actualizarMostrarFormulario(!mostrarFormulario);
  }
  return (
    <div >
      
      <Header />
      {mostrarFormulario ? <Formulario /> : <></>}      
      {/* {mostrarFormulario && <Formulario />} */}
      {/* <Formulario /> */}
      <MyOrg cambiarMostrarFormulario={cambiarMostrarFormulario} />
      
    </div>
  );
}

export default App;
