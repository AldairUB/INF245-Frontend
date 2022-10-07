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

const NuevoEntregable = () => {

  return (
    <div
      name="nuevoentregable"
      className="h-fit w-full bg-white"
    >
      <div className="flex w-full h-20"></div>
          
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
        <div className="pb-4 mb-4 grid grid-cols-1">          
            <p className="text-3xl font-semibold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
              Nuevo Entregable
            </p>
        </div>

        <div className="pb-4 flex flex-col w-full">

          <div className="flex flex-row">
            <div className="w-72 mb-4 mr-4">
              <Input label="Nombre de Entregable" />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-72 mb-4 mr-4">
              <Input label="Fecha de Entrega" />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-full h-full mb-4">
              <Textarea label="Descripción" />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-72 mb-4 mr-4">
              <Input label="Encargado" />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-72 mb-4 mr-4">
              <Select label="Rúbrica">
                <Option>No se</Option>
                <Option>que</Option>
                <Option>Poner</Option>
              </Select>
            </div>
          </div>
        
        </div>

      </div>

    </div>
  );
};

export default NuevoEntregable;