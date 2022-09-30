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
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-full">
        <div className="pb-10 mb-4 grid grid-cols-1">
          <p className="text-3xl font-semibold inline border-b-4  text-blue-900 flex-auto border-blue-900">
            Semestres Académicos > Nuevo Semestre
          </p>
        </div>

        <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
          Año académico (*)
        </p>
        <div className="w-72 pb-5">
          <Input label="Año" />
        </div>

        <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
          Periodo
        </p>
        <div className="w-72 pb-5">
          <Input label="Periodo" />
        </div>

        <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
          Inicio del Periodo
        </p>
        <div className="w-72 pb-5">
          <Input label="Fecha" />
        </div>

        <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
          Fin del Periodo
        </p>
        <div className="w-72 pb-5">
          <Input label="Fecha" />
        </div>

        <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
          Cierre parcial de notas
        </p>
        <div className="w-72 pb-5">
          <Input label="Fecha" />
        </div>

        <p className="text-1xl font-semibold inline    text-blue-900 flex-auto border-amber-600">
          Cierre final de notas
        </p>
        <div className="w-72 pb-5">
          <Input label="Fecha" />
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

export default NuevoSemestre;
