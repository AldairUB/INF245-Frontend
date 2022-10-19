import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Select, Option, Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

import DataTable from "react-data-table-component";
import { agregarTareas, listarTareas } from "../../services/TareaServices";

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

const GestionDeTareas = () => {

  const [tasks, setTask] = useState([]);
  const [open, setOpen] = useState(false);

  const [tipoModal, setTipoModal] = useState("");
  /*Nos servirá para hacer los filtros por nombre*/
  const [search, setSearch] =
    useState(""); /*Default: muestra todo copia de users */
  const [filtered, setFiltered] = useState([]);
  const [insertado, setInsertado] = useState(false);
  const [nuevaTarea, setNuevaTarea] = useState({
    nombre: "",
    descripcion: "",
    curso: "",
    fechaLimite: "",
  });

  const showData = async () => {
    try {
      const tasks = await listarTareas();
      const data = tasks.data;
      setTask(data);
      setFiltered(data);
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
      name: "NOMBRE",
      selector: (row) => row.descripcion,
      sortable: true,
    },
    {
      name: "FECHA DE ENTREGA",
      selector: (row) => row.fechaLimite,
      sortable: true,
    },
  ];

  useEffect(() => {
    const result = tasks.filter((task) => {
      return task.nombre.toLowerCase().match(search.toLowerCase());
    });
    setFiltered(result);
  }, [search]);

  const modalInsertar = () => {
    setOpen(!open);
  };

  const handleInputChange = async (event) => {
    console.log();
    event.persist();
    await setNuevaTarea({
      ...nuevaTarea,
      [event.target.name]: event.target.value,
    }).catch((error) => {
      console.log(error.message);
    });
    console.log(nuevaTarea);
  };

  const addTarea = () => {
    agregarTareas(nuevaTarea);
    showData();
    modalInsertar();
    setInsertado(true);
  };

  return (
    <div
      name="asignaciondetareas"
      className="h-fit w-full bg-white"
    >
      <div className="flex w-full h-20"></div>

      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
        <div className="pb-12 flex flex-row w-full">
          <p className="text-3xl font-semibold inline border-b-4 text-blue-pucp flex-auto border-blue-pucp w-4/5">
            Gestión de Tareas
          </p>
          <p className="text-3xl font-semibold inline border-b-4 text-blue-pucp flex-auto border-blue-pucp w-1/5 text-right">
            2022-2
          </p>
        </div>

        <div className="flex flex-col w-full">

          <div className="pb-8 flex flex-row">
            <div className="w-72">
              <Input
                label="Búsqueda por nombre"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="w-72  ml-6 mr-12">
              <Select label="Curso">
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

          <Box sx={{ height: 400, width: "100%" }} className="pb-5">
            <div className="pb-6 w-full" style={{ height: 400, width: "100%" }}>
              <DataTable
                columns={columnas}
                data={filtered}
                pagination
                selectableRows
                selectableRowsHighlight
                highlightOnHover
              ></DataTable>
            </div>
          </Box>

          {/*aca comienza el form*/}

          <Dialog open={open}>
            <DialogTitle>Crear tarea nueva</DialogTitle>
            <Divider />
            <DialogContent>
              <DialogContentText>
                <p ml="10px" mr="10px">
                  Llene los siguientes campos
                </p>
                <p ml="1px" mr="10px" className="text-white">
                  .............................................................................................
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
                  name="nombre"
                  id="nombre"
                  label="Nombre"
                  fullWidth
                  variant="standard"
                  onChange={handleInputChange}
                  value={nuevaTarea ? nuevaTarea.nombre : ""}
                />
                <TextField
                  required
                  margin="normal"
                  name="descripcion"
                  id="descripcion"
                  label="Descripción"
                  fullWidth
                  variant="standard"
                  onChange={handleInputChange}
                  value={nuevaTarea ? nuevaTarea.descripcion : ""}
                />
                <TextField
                  required
                  margin="normal"
                  name="fechaLimite"
                  id="fechaEntrega"
                  label="Fecha de Entrega"
                  fullWidth
                  variant="standard"
                  onChange={handleInputChange}
                  value={nuevaTarea ? nuevaTarea.fechaLimite : ""}
                />

              </Box>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={() => modalInsertar()}>
                Cancelar
              </Button>
              <Button variant="contained" onClick={() => addTarea()}>
                Guardar
              </Button>
            </DialogActions>
          </Dialog>

        </div>
      </div>
    </div>
  );
};

export default GestionDeTareas;