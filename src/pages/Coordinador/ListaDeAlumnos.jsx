import React from "react";
import { Link } from "react-router-dom";
import { Select, Option, Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

const ListaDeAlumnos = () => {

    /*Esta Lista se usa para Gestiones de Curso*/ 
  const columns: GridColDef[] = [
    {
      field: 'codigo',
      headerName: 'Código PUCP',
      width: 150,
      editable: true,
    },
    {
      field: 'nombre',
      headerName: 'Nombre Completo',
      width: 380,
      editable: true,
    },
    {
      field: 'especialidad',
      headerName: 'Especialidad',
      width: 300,
      editable: true,
    },
  ];
  
  const rows = [
    { id: 1, codigo: '20180448', nombre: 'Camila Torres', especialidad: 'Ingeniería Informática' },
    { id: 2, codigo: '20180524', nombre: 'Patricia Oyarce', especialidad: 'Ingeniería Informática' },
  ];

  return (
    <div name="listadealumnos" className="h-screen w-full bg-white">
    <div className="flex w-full h-20"></div>

    <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
      <div className="pb-10 mb-4 grid grid-cols-1">          
          <p className="text-3xl font-bold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
            Lista de Alumnos
          </p>

      </div>

      <div className="pb-8 flex flex-row">
        <div className="w-72">
          <Input label="Nombre del Alumnos" />
        </div>

        <div className="w-72  mx-12">
          <Select label="Filtro">
            <Option>Nombre</Option>
            <Option>Código PUCP</Option>
          </Select>
        </div>


      </div>
      <div>
        <div></div>

        <Box sx={{ height: 350, width: '100%' }} className="pb-5">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={4}
            rowsPerPageOptions={[4]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>

      </div>

      <div className="grid grid-cols-3 w-full">
          <div> </div>
          <div> </div>
          <div>
            <Link to = "/nuevocurso">
            <Button variant="contained" className="bg-white text-blue-pucp border-b-3 ml-12">Cancelar</Button>
            </Link>
            <Button variant="contained" className="bg-blue-pucp ml-5">Agregar</Button>
          </div>          
        </div>
    </div>
  </div>
  );
};

export default ListaDeAlumnos