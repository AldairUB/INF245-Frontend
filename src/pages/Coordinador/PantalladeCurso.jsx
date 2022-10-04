import React from "react";
import { Link } from "react-router-dom";
import { Select, Option, Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

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

const PantalladeCursos = () => {
  
    return (
        <div name="pantalladecursos" className="h-screen w-full bg-white">

        <div className="flex w-full h-20"></div>
        <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
        <div className="pb-10 mb-4 grid grid-cols-1">          
            <p className="text-3xl font-semibold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
              Cursos
            </p>
        </div>
        <div className="pb-8 flex flex-row">

          <div className="w-72">
            <Select label="Ciclo">
              <Option>2022-2</Option>
              <Option>2022-1</Option>
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
          
        </div>
    </div>
    );
  };
  
  export default PantalladeCursos;