import React from "react";
import CuevaRony from "../../../assets/cueva.png";
import { Link } from "react-router-dom";
import { Select, Option } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { MdEmail } from "react-icons/md";

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
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

const GestionTemasTesis = () => {
    const rows: GridRowsProp = [
        { id: 1, col1: 'Chatbot conversacional que sugiere comidas según  las preferencias del usuario', col2: "Proyecto de Tesis 1", col3: 'Johan Baldeón', col4: 'Aprobado'},
        { id: 2, col1: 'Influencia de la publicidad gráfica en la decisión de compra en los niños clientes de Chuck E.Cheeses', col2: "Proyecto de Tesis 1", col3: 'Fernando Huamán', col4: 'Aprobado'},
        { id: 3, col1: 'Ambientes virtuales como estrategia de enseñanza', col2: "Proyecto de Tesis 1", col3: 'Patricia Natividad', col4: 'Aprobado'},
        { id: 4, col1: 'Modelo de enseñanza Blended para academias preuniversitarias de Lima Metropolitana', col2: "Proyecto de Tesis 2", col3: 'Rony Cueva', col4: 'Aprobado'},
        { id: 5, col1: 'Sistema para diagnosticar la catarata mediante el uso de redes neuronales', col2: "Proyecto de Tesis 2", col3: 'David Allasi', col4: 'Aprobado'},
        { id: 6, col1: 'Propuesta de la plataforma de big data orientado al sector turístico', col2: "Proyecto de Tesis 2", col3: 'Cesar Aguilera', col4: 'Aprobado'}, 
      ];
    
      const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Título de Tema de Tesis', width: 350 },
        { field: 'col2', headerName: 'Curso', width: 170 },
        { field: 'col3', headerName: 'Asesor', width: 150 },
        { field: 'col4', headerName: 'Estado', width: 150 },
      ];

    return (
    <div name="gestiontemastesis" className="h-screen w-full bg-white">
        <div className="flex w-full h-20"></div>
        <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
            <div className="pb-5 mb-4 flex flex-row w-full">          
            <p className="text-3xl font-semibold inline border-b-4 text-blue-pucp flex-auto border-blue-pucp w-4/5">
                Gestión de Temas de Tesis
            </p>
            <p className="text-3xl font-semibold inline border-b-4 text-blue-pucp flex-auto border-blue-pucp w-1/5 text-right">
                2022-2
            </p>
            </div>

            <div className="pb-8 flex flex-row">
                <div className="w-72">
                    <Input label="Búsqueda" />
                </div>

                <div className="w-72  ml-6 mr-12">
                    <Select label="Filtro">
                        <Option>Nombre</Option>
                    </Select>
                </div>

                <Stack direction="row" spacing={1} className="ml-auto flex">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="modify">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="add">
                        <AddCircleIcon />
                    </IconButton>
                </Stack>
            </div>
        

            <div className="pb-6" style={{ height: 350, width: "100%" }}>
                <DataGrid rows={rows} columns={columns} checkboxSelection={true} />
            </div>

        </div>
    </div>
  );
};

export default GestionTemasTesis;
