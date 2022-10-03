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

const ReporteDeSemestres = () => {

    /*Esta Lista se usa para Gestiones de Curso*/ 
  const columns: GridColDef[] = [
    {
      field: 'semestre',
      headerName: 'Semestre',
      width: 150,
      editable: true,
    },
    {
      field: 'fechaini',
      headerName: 'Fecha de Inicio',
      width: 180,
      editable: true,
    },
    {
        field: 'fechafin',
        headerName: 'Fecha Fin',
        width: 180,
        editable: true,
      },
    {
      field: 'estado',
      headerName: 'Estado',
      width: 150,
      editable: true,
    },
  ];
  
  const rows = [
    { id: 1, semestre: '2021-1', fechaini: '01/01/2021', fechafin: '31/07/2021', estado: 'Culminado'},
    { id: 2, semestre: '2021-2', fechaini: '01/08/2021', fechafin: '31/12/2021', estado: 'Culminado'},
    { id: 3, semestre: '2022-1', fechaini: '01/01/2022', fechafin: '31/07/2022', estado: 'Culminado'},
    { id: 4, semestre: '2022-2', fechaini: '01/08/2022', fechafin: '31/12/2022', estado: 'Culminado'},
  ];

  return (
    <div name="reportedesemestres" className="h-screen w-full bg-white">
    <div className="flex w-full h-20"></div>

    <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
      <div className="pb-10 mb-4 grid grid-cols-1">          
          <p className="text-3xl font-bold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
            Reportes
          </p>
      </div>

      <div className="pb-4">
            <p className="text-2xl font-semibold inline text-amber-800 flex-auto">
              Reporte de rendimiento por semestre
            </p>
      </div>


      <div className="pb-8 flex flex-row">
        <div className="w-72">
          <Input label="Buscar" />
        </div>

        <div className="grid grid-cols-3 w-full">
          <div> </div>
          <div> </div>
          <div>
            <Button variant="contained" className="bg-blue-pucp ml-5">Ver Detalle</Button>
          </div>          
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


    </div>
  </div>
  );
};

export default ReporteDeSemestres