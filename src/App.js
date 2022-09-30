import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//componentes principales
import NavHorizontalBar from "./components/NavHorizontalBar";
import NavVerticalBar from "./components/NavVerticalBar";

import Home from "./pages/Home";

//Aldair
import AGestionDeEspecialidades from "./pages/Administrador/Aldair/GestionDeEspecialidades"; //no va
import AGestionDeFacultades from "./pages/Administrador/Aldair/GestionDeFacultades";
import AGestionDeSemestres from "./pages/Administrador/Aldair/GestionDeSemestres";
import AGestionDeUsuarios from "./pages/Administrador/Aldair/GestionDeUsuarios";
//Angel
import AGestionFacultades from "./pages/Administrador/Angel/GestionFacultades";

//Camila
import CGestionDeUsuarios from "./pages/Administrador/Camila/GestionDeUsuarios";
import CNuevaFacultad from "./pages/Administrador/Camila/NuevaFacultad";
import CNuevoSemestre from "./pages/Administrador/Camila/NuevoSemestre";
import CNuevoUsuario from "./pages/Administrador/Camila/NuevoUsuario";

//Elizabeth
import EGestionUsuarioDocente from "./pages/Administrador/Elizabeth/GestionUsuarioDocente";

import { ThemeProvider } from "@material-tailwind/react";
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
          <Route path="/" element={<CNuevaFacultad />}>
            {" "}
          </Route>
          <Route path="/home" element={<Home />}>
            {" "}
          </Route>
          <Route
            path="/listaentregablespendientes"
            element={<ListaEntregablesPendientes />}
          >
            {" "}
          </Route>
          <Route
            path="/pendientesporcorregir"
            element={<PendientesPorCorregir />}
          >
            {" "}
          </Route>
          <Route path="/gestionentrega" element={<GestionEntrega />}>
            {" "}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
