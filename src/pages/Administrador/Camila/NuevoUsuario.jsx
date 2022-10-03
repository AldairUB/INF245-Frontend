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
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
        <div className="pb-10 mb-4 grid grid-cols-1">          
            <p className="text-3xl font-semibold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
              Gestión de Usuarios {">"} Nuevo Usuario
            </p>
        </div>

        <div className="pb-8">  
          <p className="text-2xl font-semibold inline  text-amber-800 flex-auto">
            Datos personales
          </p>    
        </div>

        <div className="pb-4 flex flex-col w-full">

          <div className="flex flex-row">
            <div className="w-72 mb-4 mr-4">
              <Input label="DNI" />
            </div>

            <div className="w-full mb-4">
              <Input label="Nombres y apellidos" />
            </div>
          </div>

        </div>

        <div className="pb-8">  
          <p className="text-2xl font-semibold inline  text-amber-800 flex-auto">
            Identificación y correo
          </p>    
        </div>

        <div className="pb-4 flex flex-col w-full">
          


          <div className="flex flex-row">
            <div className="w-72 mb-4">
              <Input label="Código Pucp" />
            </div>
            <div className="w-full  mb-4">
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-72 mb-4 mr-4">
              <Select label="Facultad">
                <Option>Ciencias e Ingeniería</Option>
                <Option>Derecho</Option>
                <Option>Artes Escénicas</Option>
              </Select>
            </div>

            <div className="w-full  mb-4">
              <Select label="Especialidad">
                <Option>Ingeniería Informática</Option>
                <Option>Ingeniería Industrial</Option>
                <Option>Ingeniería Mecatrónica</Option>
                <Option>Física</Option>
                <Option>Química</Option>
              </Select>
            </div>
          </div>      

          <div className="w-full pb-5">
            <Input label="Correo del Usuario" />
          </div>

          <div className="w-full  pb-5">
            <Select label="Tipo de Usuario">
              <Option>Alumno</Option>
              <Option>Asesor</Option>
            </Select>
          </div>    

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

export default NuevoUsuario;
