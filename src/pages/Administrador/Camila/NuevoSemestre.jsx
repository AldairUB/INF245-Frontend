import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Select, Option, Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const NuevoSemestre = () => {
  return (
    <div name="nuevosemestre" className="h-screen w-full bg-white">
      <div className="flex w-full h-20"></div>
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
        <div className="pb-10 mb-4 grid grid-cols-1">
          <p className="text-3xl font-semibold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
            Semestres Académicos {">"} Nuevo Semestre
          </p>
        </div>

        <div className="pb-8">  
          <p className="text-2xl font-semibold inline  text-amber-800 flex-auto">
            Informacion general
          </p>    
        </div>

        <div className="pb-5 flex flex-col w-full">
          <div className="grid grid-cols-2">
            <div className="w-72 pb-5">
              <Input label="Año académico" />
            </div>

            <div className="w-72 pb-5 ml-34">
              <Input label="Periodo" />
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="w-72 pb-5">
              <Input label="Inicio del periodo" />
            </div>

            <div className="w-72 pb-5">
              <Input label="Fin del periodo" />
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="w-72 pb-5">
              <Input label="Cierre parcial de notas" />
            </div>

            <div className="w-72 pb-5">
              <Input label="Cierre final de notas" />
            </div>
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

export default NuevoSemestre;
