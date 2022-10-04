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

const NuevoCurso = () => {

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
    { id: 1, codigo: '20180341', nombre: 'Rony Cueva', especialidad: 'Ingeniería Informática' },
    { id: 2, codigo: '20121121', nombre: 'Viktor Klebnikov', especialidad: 'Ingeniería Informática' },
  ];

  const rows2 = [
    { id: 1, codigo: '20180448', nombre: 'Camila Torres', especialidad: 'Ingeniería Informática' },
    { id: 2, codigo: '20180524', nombre: 'Patricia Oyarce', especialidad: 'Ingeniería Informática' },
  ];

  return (
    <div
      name="nuevocurso"
      className="h-fit w-full bg-white"
    >
      <div className="flex w-full h-20"></div>
          
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
        <div className="pb-10 mb-4 grid grid-cols-1">          
            <p className="text-3xl font-semibold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
              Gestión de Curso {">"} Nueva Curso            
            </p>
        </div>

        <div className="pb-4 flex flex-col w-full">
          <div className="pb-4">
            <p className="text-2xl font-semibold inline text-amber-800 flex-auto">
              Información general
            </p>
          </div>

          <div className="flex flex-row">
            <div className="w-72 mb-4 mr-4">
              <Input label="Clave" />
            </div>

            <div className="w-72 mb-4 mr-4">
              <Input label="Nombre del Curso" />
            </div>

            <div className="w-72">
            <Select label="Ciclo">
              <Option>2022-2</Option>
              <Option>2022-1</Option>
            </Select>
            </div>
          </div>

          <div className="w-full">
            <Select label="Coordinador del Curso">
              <Option>Luis Flores</Option>
              <Option>Freddy Paz</Option>
            </Select>
          </div>

        </div>

        <div className="pb-8 flex flex-col w-full h-50">
          <div className="w-full h-full">
            <Textarea label="Descripción" />
          </div>
        </div>

        <div className="flex flex-col w-full">
            <p className="text-2xl font-semibold inline text-amber-800 flex-auto">
              Listado de Profesores
            </p>

          <Stack direction="row" spacing={1} className="ml-auto">
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

          <Box sx={{ height: 250, width: '100%' }} className="pb-5">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={2}
              rowsPerPageOptions={[3]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>

          <p className="text-2xl font-semibold inline text-amber-800 flex-auto">
              Listado de Alumnos
            </p>

          <Stack direction="row" spacing={1} className="ml-auto">
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

          <Box sx={{ height: 250, width: '100%' }} className="pb-5">
            <DataGrid
              rows={rows2}
              columns={columns}
              pageSize={2}
              rowsPerPageOptions={[3]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>

          <div className="grid grid-cols-3 w-full">
            <div> </div>
            <div> </div>
            <div>
              <Button variant="contained" className="bg-white text-blue-pucp border-b-3 ml-12">Cancelar</Button>
              <Button variant="contained" className="bg-blue-pucp ml-5">Guardar</Button>
            </div>          
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default NuevoCurso