import React from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Select, Option } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';



const GestionDeUsuarios= () => {

  const rows: GridRowsProp = [
    { id: 1, col1: '20181923', col2: 'Iván Córdova Rivero', col3: "Ingeniería Informática"},
    { id: 2, col1: '20182778', col2: 'Elizabeth Oyarce Tocto', col3: "Ingeniería Informática"},
    { id: 3, col1: '20182970', col2: 'Ángel Lino Campos', col3: "Ingeniería Industrial"},
    { id: 4, col1: '20190666', col2: 'Bruno del Rio Escudero', col3: "Ingeniería Informática"},
    { id: 5, col1: '20173485', col2: 'Osman Vilchez Aguirre', col3: "Física"},
    { id: 6, col1: '20183294', col2: 'Fernando Vergara Guzman', col3: "Química"}, 
  ];
  
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Código', width: 150 },
    { field: 'col2', headerName: 'Nombre Completo', width: 350 },
    { field: 'col3', headerName: 'Especialidad', width: 200 },
  ];

  return (
    <div
      name="gestiondeusuarios"
      className="h-screen w-full bg-white"
    >
      <div className="flex w-full h-20"></div>
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-full">
        <div className="pb-10 mb-4 grid grid-cols-1">          
          <p className="text-3xl font-semibold inline border-b-4 text-blue-pucp flex-auto border-blue-pucp">
            Gestión de Usuarios
          </p>
        </div>

        <div className="pb-8 flex flex-row">
          <div className="w-72">
            <Input label="Buscar" />
          </div>
          <div className="w-72  mx-12">
            <Select label="Especialidad">
              <Option>Ingeniería Informática</Option>
              <Option>Ingeniería Industrial</Option>
              <Option>Ingeniería Mecatrónica</Option>
              <Option>Física</Option>
              <Option>Química</Option>
            </Select>
          </div>

          <Stack direction="row" spacing={1} className="ml-auto flex">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="modify">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="add">
              <AddCircleIcon />
            </IconButton>
          </Stack>
        </div>

        <div className="pb-6" style={{ height: 350, width: '100%' }}>
          <Link to="/gestiondeusuarios">
            <DataGrid rows={rows} columns={columns} checkboxSelection={true}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GestionDeUsuarios;
