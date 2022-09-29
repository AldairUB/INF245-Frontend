import React from "react";
import { Link } from "react-router-dom";
import { Select, Option, Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  
  import { BiTask } from "react-icons/bi";

const GestionDeFacultades = () => {

  const rows: GridRowsProp = [
    { id: 1, col1: 'FA001', col2: 'Arquitectura y Urbanismo'},
    { id: 2, col1: 'FA002', col2: 'Arte y Diseño'},
    { id: 3, col1: 'FA003', col2: 'Artes Escénicas'},
    { id: 4, col1: 'FA004', col2: 'Ciencias Sociales'},
  ];
  
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Código', width: 150 },
    { field: 'col2', headerName: 'Facultad', width: 700 },
  ];

  return (
    <div
      name="gestiondefacultades"
      className="h-screen w-full bg-white"
    >
      <div className="flex w-full h-20"></div>
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-full">
        <div className="pb-10 mb-4 grid grid-cols-1">          
            <p className="text-3xl font-bold inline border-b-4  text-blue-900 flex-auto border-blue-900">
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

          <Button className="ml-7 bg-blue-900">Buscar</Button>
          <Button className="ml-7 bg-blue-900">Agregar</Button>
          <Button className="ml-7 bg-blue-900">Eliminar</Button>
        </div>
        <div>
          <div>
            
          </div>

          <div className="pb-6" style={{ height: 450, width: '100%' }}>
            <Link to="/gestiondefacultades">
              <DataGrid rows={rows} columns={columns} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GestionDeFacultades;