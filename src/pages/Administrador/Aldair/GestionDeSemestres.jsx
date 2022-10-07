import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Select, Option, Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import DataTable from "react-data-table-component";
import { agregarSemestre, listarSemestres } from "../../../services/SemestreServices";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Box,
  Button,
  TextField,
} from "@mui/material";
const GestionDeSemestres = () => {
  const [anio, setAnioAcademico] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [iniPeriodo, setIniPeriodo] = useState("");
  const [finPeriodo, setFinPeriodo] = useState("");
  const [iniNotas, setIniNotas] = useState("");
  const [finNotas, setFinNotas] = useState("");
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  const [tipoModal, setTipoModal] = useState("");
  const [insertado, setInsertado] = useState(false);
  const [nuevoSemestre, setNuevoSemestre] = useState({

    anhoAcademico: "",
    periodo: "",
    fechaInicio: "",
    fechaFin: "",
    fechaCierreNotasParcial: "",
    fechaCierreNotasFinal: "",
  });

  const showData = async () => {
    try {
      const usuarios = await listarSemestres();
      const data = usuarios.data;
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showData();
    setInsertado(false);
  }, [insertado]);

  const columnas = [
    {
      name: "SEMESTRE",
      selector: (row) => row.anhoAcademico + "-" + row.periodo,
    },
    {
      name: "INICIO",
      selector: (row) => row.fechaInicio,
    },
    {
      name: "FIN",
      selector: (row) => row.fechaFin,
    },
  ];

  const modalInsertar = () => {
    setOpen(!open);
  };

  const handleInputChange = async (event) => {
    console.log();
    event.persist();
    await setNuevoSemestre({
      ...nuevoSemestre,
      [event.target.name]: event.target.value,
    }).catch((error) => {
      console.log(error.message);
    });
    console.log(nuevoSemestre);
  };

  const addSemestre = () => {
    agregarSemestre(nuevoSemestre);
    showData();
    modalInsertar();
    setInsertado(true);
  };

  return (
    <div name="gestiondesemestres" className="h-screen w-full bg-white">
      <div className="flex w-full h-20"></div>

      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
        <div className="pb-10 mb-4 grid grid-cols-1">
          <p className="text-3xl font-bold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
            Semestres Académicos
          </p>
        </div>

        <div className="pb-8 flex flex-row">
          <div className="w-72">
            <Input label="Semestre" />
          </div>

          <div className="w-72  mx-12">
            <Select label="Filtro">
              <Option>Nombre</Option>
            </Select>
          </div>

          <Stack direction="row" spacing={1} className="ml-auto flex">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="modify">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="add"
              onClick={() => {
                setTipoModal("insertar");
                modalInsertar();
              }}
            >
              <AddCircleIcon />
            </IconButton>
          </Stack>
        </div>
        <div>
          <div></div>

          <Box sx={{ height: 350, width: "100%" }} className="pb-5">
            <div className="pb-6 w-full" style={{height: 350, width: "100%"}}>
              <DataTable
                columns={columnas}
                data={users}
                pagination
                selectableRows
                selectableRowsHighlight
                highlightOnHover
              ></DataTable>
            </div>
          </Box>
          {/*aca comienza el form*/}

          <Dialog open={open}>
            <DialogTitle>Formulario</DialogTitle>
            <Divider />
            <DialogContent>
              <DialogContentText>
                <p ml="10px" mr="10px">
                  Llene los siguientes campos
                </p>
              </DialogContentText>
              <Box
                sx={{
                  marginTop: 2,
                  marginBottom: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >


                <TextField
                  required
                  margin="normal"
                  name="anhoAcademico"
                  id="anio"
                  label="Año académico"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={handleInputChange}
                  value={nuevoSemestre ? nuevoSemestre.anhoAcademico: ""}
                />

                <TextField
                  required
                  margin="normal"
                  name="periodo"
                  id="idPeriodo"
                  label="Periodo"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={handleInputChange}
                  value={nuevoSemestre ? nuevoSemestre.periodo: ""}
                />

                <TextField
                  required
                  margin="normal"
                  name="fechaInicio"
                  id="idIniPeriodo"
                  label="Inicio del Periodo"
                  fullWidth
                  variant="standard"
                  onChange={handleInputChange}
                  value={nuevoSemestre ? nuevoSemestre.fechaInicio: ""}
                />

                <TextField
                  required
                  margin="normal"
                  name="fechaFin"
                  id="idFinPeriodo"
                  label="Fin del Periodo"
                  fullWidth
                  variant="standard"
                  onChange={handleInputChange}
                  value={nuevoSemestre ? nuevoSemestre.fechaFin: ""}
                />

                <TextField
                  required
                  margin="normal"
                  name="fechaCierreNotasParcial"
                  id="idIniNotas"
                  label="Cierre Parcial de Notas"
                  fullWidth
                  variant="standard"
                  onChange={handleInputChange}
                  value={nuevoSemestre ? nuevoSemestre.fechaCierreNotasParcial: ""}
                />

                <TextField
                  required
                  margin="normal"
                  name="fechaCierreNotasFinal"
                  id="idFinNotas"
                  label="Cierre Final de Notas"
                  fullWidth
                  variant="standard"
                  onChange={handleInputChange}
                  value={nuevoSemestre ? nuevoSemestre.fechaCierreNotasFinal: ""}
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={() => modalInsertar()}>
                Cancelar
              </Button>
              <Button variant="contained" onClick={() => addSemestre()}>
                Guardar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default GestionDeSemestres;
