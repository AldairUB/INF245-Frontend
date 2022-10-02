import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//componentes principales
import NavHorizontalBar from "./components/NavHorizontalBar";
import NavVerticalBar from "./components/NavVerticalBar";

import Home from "./pages/Home";
import Inicio from "./pages/Inicio";

import GestionDeFacultades from "./pages/Administrador/Aldair/GestionDeFacultades";
import GestionDeSemestres from "./pages/Administrador/Aldair/GestionDeSemestres";
import GestionDeUsuarios from "./pages/Administrador/Aldair/GestionDeUsuarios";
//<Route path = "/" exact component={Home}/>

import ListaEntregablesPendientes from "./pages/ListaEntregablesPendientes";
import PendientesPorCorregir from "./pages/PendientesPorCorregir";
import GestionEntrega from "./pages/GestionEntrega";

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
