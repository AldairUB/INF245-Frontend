import React from "react";
import { Link } from "react-router-dom";
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

const PopUp_ListaCambioAsesor = () => {
    const rows: GridRowsProp = [
        {
          id: 1,
          col1: "César Aguilera",
          col2: "cesar.aguilera@pucp.edu.pe",
          col3: "Proyecto de Tesis 1",
          col4: "Ingeniería Informática",
        },
        {
          id: 2,
          col1: "Isaac Yrigoyen",
          col2: "isaac.yrigoyen@pucp.edu.pe",
          col3: "Proyecto de Tesis 1",
          col4: "Ingeniería Informática",
        },
        {
          id: 3,
          col1: "Eder Quispe",
          col2: "eder.quispe@pucp.edu.pe",
          col3: "Proyecto de Tesis 1, Proyecto de Tesis 2",
          col4: "Ingeniería Informática",
        },
      ];
    
      const columns: GridColDef[] = [
        { field: "col1", headerName: "Nombre completo", width: 150 },
        { field: "col2", headerName: "Correo electrónico", width: 350 },
        { field: "col3", headerName: "Curso", width: 150 },
        { field: "col4", headerName: "Especialidad", width: 150 },
      ];
  return (
     <div className="flex flex-col justify-center items-center text-center w-fit h-5/6 px-4 fixed top-[5%] left-[15%]">
            
        <Card className="h-fit">
            <CardHeader>
                <div>
                    <p className="text-2xl font-semibold  text-amber-800 flex-auto p-4">
                        Asesores Disponibles
                    </p>
                </div>
            </CardHeader>
            <CardBody>
            <div className="align-middle h-96 w-60%">

                <div className="flex flex-row py-5">
                    <div className="w-72 ">
                        <Input label="Nombre del asesor" />
                    </div>

                    <Button className="ml-10 mr-12 bg-amber-800">Buscar</Button>
                    <Button className="ml-96 bg-blue-pucp">Seleccionar</Button>
                </div>


                <div className="flex">
                    <Link to="/gestionentrega">
                        <DataGrid rows={rows} columns={columns}  style={{ height: 300, width: 1000 }}/>
                    </Link>
                </div>
            </div>
            </CardBody>
        </Card>


    </div>
  );
};

export default PopUp_ListaCambioAsesor;