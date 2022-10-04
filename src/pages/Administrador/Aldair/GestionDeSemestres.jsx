import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Select, Option, Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import DataTable from "react-data-table-component";
import { listarSemestres } from "../../../services/SemestreServices";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const GestionDeSemestres = () => {
  const [users, setUsers] = useState([]);
  const showData = async () => {
    try {
      const usuarios = await listarSemestres();
      const data = usuarios.data;
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showData();
  }, []);

  const columnas = [
    {
      name: "SEMESTRE",
      selector: (row) => row.anhoAcademico + "-" + row.periodo,
    },
    {
      name: "INICIO",
      selector: (row) => row.fechaInicio,
    },
    {
      name: "FIN",
      selector: (row) => row.fechaFin,
    },
  ];
  return (
    <div name="gestiondesemestres" className="h-screen w-full bg-white">
      <div className="flex w-full h-20"></div>

      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
        <div className="pb-10 mb-4 grid grid-cols-1">
          <p className="text-3xl font-bold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
            Semestres Académicos
          </p>
        </div>

        <div className="pb-8 flex flex-row">
          <div className="w-72">
            <Input label="Semestre" />
          </div>

          <div className="w-72  mx-12">
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
        <div>
          <div></div>

          <Box sx={{ height: 350, width: "100%" }} className="pb-5">
            <DataTable
              columns={columnas}
              data={users}
              pagination
              selectableRows
            ></DataTable>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default GestionDeSemestres;
