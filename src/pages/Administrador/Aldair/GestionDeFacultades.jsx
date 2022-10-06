import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Select, Option, Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import { Modal } from "@mui/material";

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
import { BiTask } from "react-icons/bi";
import { listarFacultades } from "../../../services/FacultadServices";
import DataTable from "react-data-table-component";
const GestionDeFacultades = () => {
  const [nombreFac, setNombreFac] = useState("");
  const [decano, setDecano] = useState("");
  const [anho, setAnho] = useState("");
  const [users, setUsers] = useState([]);
  /*Nos servirá para hacer los filtros por nombre*/
  const [search, setSearch] =
    useState(""); /*Default: muestra todo copia de users */
  const [filtered, setFiltered] = useState([]);
  const [open, setOpen] = useState(false);
  const showData = async () => {
    try {
      const usuarios = await listarFacultades();
      const data = usuarios.data;
      setUsers(data);
      setFiltered(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showData();
  }, []);

  const columnas = [
    {
      name: "NOMBRE",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "DECANO",
      selector: (row) => row.decano,
      sortable: true,
    },
  ];

  useEffect(() => {
    const result = users.filter((user) => {
      return user.nombre.toLowerCase().match(search.toLowerCase());
    });
    setFiltered(result);
  }, [search]);
  //AGREGAR FACULTAD
  const modalInsertar = () => {
    setOpen(!open);
  };
  return (
    <div name="gestiondefacultades" className="h-screen w-full bg-white">
      <div className="flex w-full h-20"></div>

      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
        <div className="pb-10 mb-4 grid grid-cols-1">
          <p className="text-3xl font-bold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
            Facultades
          </p>
        </div>

        <div className="pb-8 flex flex-row">
          <div className="w-72">
            <Input
              label="Nombre de facultad"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="w-72  mx-12">
            <Select label="Filtro">
              <Option>Nombre</Option>
              <Option>Código</Option>
            </Select>
          </div>
          <Stack direction="row" spacing={1} className="ml-auto flex">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="modify">
              <EditIcon />
            </IconButton>
            <Link
              to="/nuevafacultad"
              className="flex justify-between items-center w-full text-white"
              rel="noreferrer"
            >
              <IconButton aria-label="add">
                <AddCircleIcon />
              </IconButton>
            </Link>
          </Stack>
          |
        </div>
        <div>
          <div></div>

          <Box sx={{ height: 350, width: "100%" }} className="pb-5">
            <div className="pb-6 w-full" style={{ height: 350, width: "100%" }}>
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
                  id="name"
                  label="Nombre de la facultad"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={nombreFac}
                  onChange={(e) => setNombreFac(e.target.value)}
                />

                <TextField
                  required
                  margin="normal"
                  id="decano"
                  label="Decano"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={decano}
                  onChange={(e) => setDecano(e.target.value.toLowerCase())}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "supervisor",
                    alignItems: "flex-start",
                  }}
                >
                  <TextField
                    required
                    margin="normal"
                    id="anho"
                    label="Año de Fundación"
                    fullWidth
                    variant="standard"
                    value={anho}
                    onChange={(e) => setAnho(e.target.value)}
                  />
                </Box>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={() => modalInsertar()}>
                Cancelar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default GestionDeFacultades;
