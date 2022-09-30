import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Select, Option, Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import DataTable from "react-data-table-component"; //npm install react-data-table-component

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import { BiTask } from "react-icons/bi";

const GestionDeFacultades = () => {
  /////comineza
  //1.- configurar los hooks
  const [users, setUsers] = useState([]);
  //2.- Funcion para mostrar los datos con fetch
  const URL = "http://localhost:8081/api/v1/facultad"; //sacar del postman
  //GA DE CAMBIO
  //obtencion de data ******IMPORTANTE********
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    showData();
  }, []);
  //3. Configuramos las columnas para el data table
  const columnas = [
    {
      name: "ID",
      selector: (row) => row.idFacultad,
    },
    {
      name: "FACULTAD",
      selector: (row) => row.nombre,
    },
  ];

  return (
    <div name="gestiondefacultades" className="h-screen w-full bg-white">
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
          <div></div>

          <div className="pb-6" style={{ height: 450, width: "100%" }}>
            <div className="pt-6">
              <DataTable columns={columnas} data={users} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionDeFacultades;
