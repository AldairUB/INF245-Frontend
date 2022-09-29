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
  

const NuevoUsuario = () => {

  return (
    <div
      name="nuevousuario"
      className="h-screen w-full bg-white"
    >
      <div className="flex w-full h-20"></div>
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-full">
        <div className="pb-10 mb-4 grid grid-cols-1">          
            <p className="text-3xl font-semibold inline border-b-4  text-blue-900 flex-auto border-blue-900">
              Gestión de Usuarios > Nuevo Usuario
            </p>
        </div>

        <div className="pb-8 grid grid-cols-2">  
          <p className="text-3xl font-semibold inline border-b-4  text-amber-600 flex-auto border-amber-600">
            Datos Personales
          </p>   
        </div>
        <div className="pb-8 grid grid-cols-1">
          <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
            DNI
          </p>
          <div className="w-72 pb-5">
            <Input label="DNI" />
          </div>

          <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
            Nombre
          </p>
          <div className="w-72 pb-5">
            <Input label="Nombre del Usuario" />
          </div>

          <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
            Apellidos
          </p>
          <div className="w-72 pb-5">
            <Input label="Apellidos del Usuario" />
          </div>
        </div>
        <div className="pb-8 grid grid-cols-2">  
          <p className="text-3xl font-semibold inline border-b-4  text-amber-600 flex-auto border-amber-600">
            Identificación y Correo
          </p>   
        </div>
        <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
            Código
          </p>
          <div className="w-72 pb-5">
            <Input label="Código del Usuario" />
          </div>
        
          <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
            Especialidad
          </p>

          <div className="w-70  pb-5">
            <Select label="Especialidad">
              <Option>Ingeniería Informática</Option>
              <Option>Ingeniería Industrial</Option>
              <Option>Ingeniería Mecatrónica</Option>
              <Option>Física</Option>
              <Option>Química</Option>
            </Select>
          </div>

          <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
            Correo
          </p>
          <div className="w-72 pb-5">
            <Input label="Correo del Usuario" />
          </div>

          <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
            Facultad
          </p>

          <div className="w-70  pb-5">
            <Select label="Facultad">
              <Option>Ciencias e Ingeniería</Option>
              <Option>Derecho</Option>
              <Option>Artes Escénicas</Option>
            </Select>
          </div>

          <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
            Tipo de Usuario
          </p>

          <div className="w-70  pb-5">
            <Select label="Tipo de Usuario">
              <Option>Alumno</Option>
              <Option>Asesor</Option>
            </Select>
          </div>
          <p className="w-full"> </p>
          <div className="">
        <Button className="mr-1">Cancelar</Button>
        <Button className="ml-5">Guardar</Button>
        </div>
      </div>
    </div>
  );
};

export default NuevoUsuario;
