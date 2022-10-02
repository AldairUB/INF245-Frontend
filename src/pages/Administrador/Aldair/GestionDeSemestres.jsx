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

const GestionDeSemestres = () => {

  const columns: GridColDef[] = [
    {
      field: 'semestre',
      headerName: 'Semestre',
      width: 150,
      editable: true,
    },
    {
      field: 'inicio_semestre',
      headerName: 'Inicio semestre',
      width: 200,
      editable: true,
    },
    {
      field: 'fin_semestre',
      headerName: 'Fin semestre',
      width: 200,
      editable: true,
    },
  ];
  
  const rows = [
    { id: 1, semestre: '2022-1', inicio_semestre: '01/01/2022', fin_semestre: '31/07/2022'},
    { id: 2, semestre: '2021-2', inicio_semestre: '01/06/2021', fin_semestre: '20/12/2021'},
    { id: 3, semestre: '2021-1', inicio_semestre: '01/01/2021', fin_semestre: '20/05/2021'},
  ];

  return (
    <div
      name="gestiondesemestres"
      className="h-screen w-full bg-white"
    >
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

export default GestionDeSemestres;