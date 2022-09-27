
import Home from "./pages/Home";
import ListaEntregablesPendientes from "./pages/ListaEntregablesPendientes";
import PendientesPorCorregir from "./pages/PendientesPorCorregir";
import Inicio from "./pages/Inicio";
import NavHorizontalBar from "./components/NavHorizontalBar";
import GestionEntrega from "./pages/GestionEntrega";
import NavVerticalBar from "./components/NavVerticalBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
//<Route path = "/" exact component={Home}/>

function App() {
  return (
    <div className="App">
      <Router>
        <NavHorizontalBar />
        <NavVerticalBar />
        <Routes>
          <Route path="/" element = {<Home/>}> </Route>
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
