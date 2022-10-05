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

const GestionTemasDetalle = () => {

  const columns: GridColDef[] = [
    {
      field: 'codigo',
      headerName: 'Código del curso',
      width: 150,
      editable: true,
    },
    {
      field: 'nombre',
      headerName: 'Nombre del curso',
      width: 540,
      editable: true,
    },
    {
      field: 'semestre',
      headerName: 'Semestre de dictado',
      width: 150,
      editable: true,
    },
  ];
  
  const rows = [
    { id: 1, codigo: 'INF248', nombre: 'Proyecto de Tesis 1', semestre: '2022-2' },
    { id: 2, codigo: 'INF249', nombre: 'Proyecto de Tesis 2', semestre: '2022-2' },
  ];

  return (
    <div
      name="gestiontemasdetalle"
      className="h-fit w-full bg-white"
    >
      <div className="flex w-full h-20"></div>
          
        <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
            <div className="pb-5 mb-4 flex flex-row w-full">          
                <p className="text-3xl font-semibold inline border-b-4 text-blue-pucp flex-auto border-blue-pucp w-4/5">
                    Gestión de Temas de Tesis > Detalle
                </p>
                <p className="text-3xl font-semibold inline border-b-4 text-blue-pucp flex-auto border-blue-pucp w-1/5 text-right">
                    2022-2
                </p>
            </div>

            <div className="pb-4">  
                <p className="text-2xl font-semibold inline  text-amber-800 flex-auto">
                    Información general del Tema de Tesis
                </p>    
            </div>

            <div className="w-full pb-4">
                <Input label="Título" />
            </div>

            <div className="pb-4 w-full h-50">
                <Textarea label="Descripción" />
            </div>

            <div className="flex flex-row w-full pb-4">
                <div className="w-1/3 mr-2">
                    <Input label="Área" />           
                </div>

                <div className="w-1/3 mx-2">
                    <Input label="Asesor Proponente" />   
                </div>

                <div className="w-1/3 ml-2">
                    <Select label="Estado">
                        <Option>Pendiente</Option>
                        <Option>Aprobado</Option>
                        <Option>Observado</Option>
                        <Option>Rechazado</Option>
                        <Option>Asignado</Option>
                    </Select>                 
                </div>                
            
            </div>

            <div className="pb-4">  
                <p className="text-2xl font-semibold inline  text-amber-800 flex-auto">
                    Asignaciones
                </p>    
            </div>

            <div className="pb-8 flex flex-row">
                <div className="w-72">
                    <Input label="Búsqueda" />
                </div>

                <div className="w-72  ml-6 mr-12">
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
        

            <div className="pb-6" style={{ height: 350, width: "100%" }}>
                <DataGrid rows={rows} columns={columns} checkboxSelection={true} />
            </div>

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
  );
};

export default GestionTemasDetalle;