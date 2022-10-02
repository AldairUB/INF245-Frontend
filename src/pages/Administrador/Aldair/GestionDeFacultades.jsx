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
  
  import { BiTask } from "react-icons/bi";

const GestionDeFacultades = () => {

  const columns: GridColDef[] = [
    {
      field: 'codigo',
      headerName: 'Código de facultad',
      width: 150,
      editable: true,
    },
    {
      field: 'nombre',
      headerName: 'Nombre de la facultad',
      width: 540,
      editable: true,
    },
  ];
  
  const rows = [
    { id: 1, codigo: 'FA001', nombre: 'Arquitectura y Urbanismo'},
    { id: 2, codigo: 'FA002', nombre: 'Facultad de Ciencias e Ingenieria'},
    { id: 3, codigo: 'FA003', nombre: 'Artes Escénicas'},
    { id: 4, codigo: 'FA004', nombre: 'Ciencias Sociales'},
  ];

  return (
    <div
      name="gestiondefacultades"
      className="h-screen w-full bg-white"
    >
      <div className="flex w-full h-20"></div>
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
        <div className="pb-10 mb-4 grid grid-cols-1">          
            <p className="text-3xl font-bold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
              Facultades
            </p>
        </div>

        <div className="pb-8 flex flex-row">
          <div className="w-72">
            <Input label="Nombre de facultad" />
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
            <IconButton aria-label="add">
              <AddCircleIcon />
            </IconButton>
          </Stack>

        </div>
        <div>
          <div>
            
          </div>

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

      </div>
    </div>
  );
};

export default GestionDeFacultades;