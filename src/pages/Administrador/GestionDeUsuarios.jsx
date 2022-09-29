import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
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

  const axios = require('axios');
  
const GestionDeUsuarios = () => {

  const rows: GridRowsProp = [
    { id: 1, col1: '20171189', col2: 'Aldair Alexander Ubilluz Bastidas', col3: 'Ingenieria Informatica'},
    { id: 2, col1: '20202345', col2: 'Angie Centeno Cáceres', col3: 'Ingenieria Industrial'},
    { id: 3, col1: '20180383', col2: 'Jose Luis Mendoza Perez', col3: 'Física'},
    { id: 4, col1: '20180239', col2: 'Pedro Suarez Vertiz', col3: 'Química'},
=======
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Select, Option } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";



const GestionDeUsuarios= () => {

  const rows: GridRowsProp = [
    { id: 1, col1: '20181923', col2: 'Iván Córdova Rivero', col3: "Ingeniería Informática"},
    { id: 2, col1: '20182778', col2: 'Elizabeth Oyarce Tocto', col3: "Ingeniería Informática"},
    { id: 3, col1: '20182970', col2: 'Ángel Lino Campos', col3: "Ingeniería Industrial"},
    { id: 4, col1: '20190666', col2: 'Bruno del Rio Escudero', col3: "Ingeniería Informática"},
    { id: 5, col1: '20173485', col2: 'Osman Vilchez Aguirre', col3: "Física"},
    { id: 6, col1: '20183294', col2: 'Fernando Vergara Guzman', col3: "Química"}, 
>>>>>>> 1cc985c2f49d6ecd5f9b734af96ed529f058f6ca
  ];
  
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Código', width: 150 },
    { field: 'col2', headerName: 'Nombre Completo', width: 350 },
<<<<<<< HEAD
    { field: 'col3', headerName: 'Especialdiad', width: 250 },
  ];
  
  return (
    <div
      name="gestiondesemestres"
=======
    { field: 'col3', headerName: 'Especialidad', width: 200 },
  ];

  return (
    <div
      name="gestiondeusuarios"
>>>>>>> 1cc985c2f49d6ecd5f9b734af96ed529f058f6ca
      className="h-screen w-full bg-white"
    >
      <div className="flex w-full h-20"></div>
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-full">
<<<<<<< HEAD
        <div className="pb-10 mb-4 grid grid-cols-1">          
            <p className="text-3xl font-bold inline border-b-4  text-blue-900 flex-auto border-blue-900">
              Usuarios
            </p>
=======
      <div className="pb-10 grid grid-cols-2">          
          <p className="text-3xl font-semibold inline border-b-4  text-blue-900 flex-auto border-blue-900">
            Gestión de Usuarios
          </p>
          <p className="text-3xl font-semibold inline border-b-4  text-blue-900 flex-auto border-blue-900 text-right">
            2022-2
          </p>
>>>>>>> 1cc985c2f49d6ecd5f9b734af96ed529f058f6ca
        </div>

        <div className="pb-8 flex flex-row">
          <div className="w-72">
            <Input label="Buscar" />
          </div>
<<<<<<< HEAD

          <div className="w-72  mx-12">
            <Select label="Filtro">
              <Option>Nombre</Option>
              <Option>Código</Option>
              <Option>Especialidad</Option>
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
            <Link to="/gestiondeusuarios">
              <DataGrid rows={rows} columns={columns} pagination pageSize={10} checkboxSelection={true}/>
            </Link>
          </div>
        </div>

=======
          <div className="w-72  mx-12">
            <Select label="Especialidad">
              <Option>Ingeniería Informática</Option>
              <Option>Ingeniería Industrial</Option>
              <Option>Ingeniería Mecatrónica</Option>
              <Option>Física</Option>
              <Option>Química</Option>
            </Select>
          </div>

          <Button className="ml-5 mr-1 bg-blue-900">Buscar</Button>
          <Button className="ml-5 mr-1 bg-blue-900">Agregar</Button>
          <Button className="ml-5 bg-blue-900"disabled={true}>Eliminar</Button>
        </div>

        <div className="pb-6" style={{ height: 350, width: '100%' }}>
          <Link to="/gestiondeusuarios">
            <DataGrid rows={rows} columns={columns} checkboxSelection={true}/>
          </Link>
        </div>
>>>>>>> 1cc985c2f49d6ecd5f9b734af96ed529f058f6ca
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default GestionDeUsuarios;
=======
export default GestionDeUsuarios;
>>>>>>> 1cc985c2f49d6ecd5f9b734af96ed529f058f6ca
