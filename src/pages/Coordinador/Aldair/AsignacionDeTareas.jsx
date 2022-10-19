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
import { FormGroup, Radio } from "@mui/material";
import { Label, RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";

const AsignacionDeTareas = () => {
    const BotonHabilitar = p => {
      return (
        <>
          <Button className="mx-4 "
            size="small"
          >
            Habilitar
          </Button>
          {p.value}
        </>
      );
    }

    const RadioButton = p => {
      return (
        <>
          <RadioButton className="mx-4 "
            size="small"
          >
            Habilitar
          </RadioButton>
        </>
      );
    }
    
    const columns1: GridColDef[] = [
        {
          field: 'fecha',
          headerName: 'Fecha de Entrega',
          width: 150
        },
        {
          field: 'entregable',
          headerName: 'Entregable',
          width: 350,
          renderCell: BotonHabilitar
        },
        {
          field: 'profesor',
          headerName: 'Profesor',
          width: 150,
          renderCell: RadioButton
        },
        {
            field: 'jurado',
            headerName: 'Jurado',
            width: 150,
            renderCell: RadioButton
         },
         {
            field: 'asesor',
            headerName: 'Asesor',
            width: 150,
            renderCell: RadioButton
         },
  ];
  
  const rows1 = [
    { id: 1, fecha: '10/07/2022', entregable: 'Entregable 1'},
    { id: 2, fecha: '15/07/2022', entregable: 'Entregable Parcial 1.1'},
    { id: 3, fecha: '20/07/2022', entregable: 'Entregable Parcial 1.2'},
    { id: 4, fecha: '29/07/2022', entregable: 'Entregable Parcial 1.3'},
  ];

  const columns2: GridColDef[] = [
    {
      field: 'fecha',
      headerName: 'Fecha de Entrega',
      width: 150,
      editable: true,
    },
    {
      field: 'entregable',
      headerName: 'Entregable',
      width: 250,
      editable: true,
    },
    {
      field: 'profesor',
      headerName: 'Profesor',
      width: 150,
      editable: true,
      renderCell: () => {
        <IconButton aria-label= "radio"> 
            <Radio
            />
        </IconButton>
     }
    },
    {
        field: 'jurado',
        headerName: 'Jurado',
        width: 150,
        editable: true,
     },
     {
        field: 'asesor',
        headerName: 'Asesor',
        width: 150,
        editable: true,
     },
  ];
  
  const rows2 = [
    { id: 1, fecha: '10/10/2022', entregable: 'Entregable 1',           profesor: '' , jurado: '' , asesor: ''},
  ];

  return (
    <div
      name="asignaciondetareas"
      className="h-fit w-full bg-white"
    >
      <div className="flex w-full h-20"></div>
          
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
        <div className="pb-10 mb-4 grid grid-cols-1">          
            <p className="text-3xl font-semibold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
              Asignación de Tareas
            </p>
        </div>

        <div className="flex flex-col w-full">
          <div className="pb-4">
            <p className="text-2xl font-semibold inline text-amber-800 flex-auto">
              Revision de Entregables
            </p>
          </div>

          <Stack direction="row1" spacing={1} className="ml-auto">
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

          <Box sx={{ height: 300, width: '100%' }} className="pb-5">
            <DataGrid
              rows={rows1}
              columns={columns1}
              pageSize={4}
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

        <div className="flex flex-col w-full">
          <div className="pb-4">
            <p className="text-2xl font-semibold inline text-amber-800 flex-auto">
              Revisión de Exposiciones
            </p>
          </div>

          <Stack direction="row2" spacing={1} className="ml-auto">
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

          <Box sx={{ height: 300, width: '100%' }} className="pb-5">
            <DataGrid
              rows={rows2}
              columns={columns2}
              pageSize={4}
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

export default AsignacionDeTareas;