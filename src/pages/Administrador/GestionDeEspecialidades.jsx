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

const GestionDeEspecialidades = () => {

  const rows: GridRowsProp = [
    { id: 1, col1: 'INF248', col2: 'Proyecto de Tesis 1', col3: "2022-2"},
    { id: 2, col1: 'INF251', col2: 'Proyecto de Tesis 2', col3: "2022-2"},
  ];
  
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Código', width: 150 },
    { field: 'col2', headerName: 'Nombre del curso', width: 350 },
    { field: 'col3', headerName: 'Semestre', width: 150 },
  ];

  return (
    <div
      name="gestiondeespecialidades"
      className="h-screen w-full bg-white"
    >
      <div className="flex w-full h-20"></div>
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-full">
        <div className="pb-10 mb-4 grid grid-cols-1">          
            <p className="text-3xl font-semibold inline border-b-4  text-blue-900 flex-auto border-blue-900">
              Gestión de Especialidades - Nueva Especialidad
            </p>
        </div>

        <div className="pb-4 flex flex-col w-full">

          <div className="flex flex-row">
            <div className="w-72 mb-4 mr-4">
              <Input label="Clave" />
            </div>

            <div className="w-full mb-4">
              <Input label="Nombre" />
            </div>
          </div>

          <div className="w-full">
            <Input label="Coordinador" />
          </div>

        </div>

        <div className="pb-8 flex flex-col w-full h-50">
          <div className="w-full h-full">
            <Textarea label="Descripción" />
          </div>
        </div>

        <div>
          <div>
            
          </div>

          <div className="pb-6" style={{ height: 250, width: '100%' }}>
            <Link to="/gestionentrega">
              <DataGrid rows={rows} columns={columns} pagination pageSize={10} checkboxSelection={true}/>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GestionDeEspecialidades;