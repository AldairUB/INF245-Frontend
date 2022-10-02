
import Home from "./pages/Home";
import ListaEntregablesPendientes from "./pages/ListaEntregablesPendientes";
import PendientesPorCorregir from "./pages/PendientesPorCorregir";
import Inicio from "./pages/Inicio";
import NavHorizontalBar from "./components/NavHorizontalBar";
import GestionEntrega from "./pages/GestionEntrega";
import NavVerticalBar from "./components/NavVerticalBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import GestionDeFacultades_NuevaFacultad from "./pages/Administrador/Jherson/GestionDeFacultades_NuevaFacultad";
import GestionDeEspecialidades_NuevaEspecialidad from "./pages/Administrador/Ivan/GestionDeEspecialidades_NuevaEspecialidad";
import GestionUsuarioDocente from "./pages/Administrador/Elizabeth/GestionUsuarioDocente";
import GestionDeFacultades from "./pages/Administrador/Aldair/GestionDeFacultades";
import GestionDeSemestres from "./pages/Administrador/Aldair/GestionDeSemestres";
import GestionDeUsuarios from "./pages/Administrador/Aldair/GestionDeUsuarios";
//<Route path = "/" exact component={Home}/>

function App() {
  return (
    <div className="App">
      <Router>
        <NavHorizontalBar />
        <NavVerticalBar />
        <Routes>
          <Route path="/" element = {<GestionDeFacultades/>}> </Route>
          <Route path="/home" element = {<Home/>}> </Route>
          <Route path="/listaentregablespendientes" element = {<ListaEntregablesPendientes/>}> </Route>
          <Route path="/pendientesporcorregir" element = {<PendientesPorCorregir/>}> </Route>
          <Route path="/gestionentrega" element = {<GestionEntrega/>}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
