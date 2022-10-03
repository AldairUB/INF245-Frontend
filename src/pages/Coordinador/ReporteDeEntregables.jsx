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

const ReporteDeEntregables = () => {
  const columns: GridColDef[] = [
    {
      field: 'documento',
      headerName: 'Documento',
      width: 150,
      editable: true,
    },
    {
      field: 'nombre',
      headerName: 'Título',
      width: 380,
      editable: true,
    },
    {
      field: 'nota',
      headerName: 'Nota Final',
      width: 100,
      editable: true,
    },
  ];
  
  const rows = [
    { id: 1, documento: 'Entregable', nombre: 'Entregable Parcial 1.1', nota: '14'},
    { id: 2, documento: 'Entregable', nombre: 'Entregable Parcial 2.1', nota: '15'},
    { id: 3, documento: 'Entregable', nombre: 'Entregable 1', nota: '19'},
    { id: 4, documento: 'Entregable', nombre: 'Entregable Parcial 2.1', nota: '16'},
    { id: 5, documento: 'Exposición', nombre: 'Exposición Final', nota: '14'},
  ];

  return (
    <div name="reportedeentregables" className="h-screen w-full bg-white">
    <div className="flex w-full h-20"></div>

    <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
      <div className="pb-10 mb-4 grid grid-cols-1">          
          <p className="text-3xl font-bold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
            Reporte {">"} Notas del Alumno
          </p>
      </div>

            <p className="text-2xl font-semibold inline text-amber-800 flex-auto">
              Entregables y Exposiciones del Alumno:
            </p>
      <div className="grid grid-cols-3 w-full">
          <div> </div>
          <div> </div>
          <div>
            <Button variant="contained" className="bg-white text-blue-pucp border-b-3 ml-12">Generar Reporte</Button>
          </div>          
        </div>


      <div className="pb-8 flex flex-row">

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
              <Button variant="contained" className="bg-blue-pucp ml-20">Salir</Button>
            </div>          
      </div>

    </div>
  </div>
  );
};

export default ReporteDeEntregables