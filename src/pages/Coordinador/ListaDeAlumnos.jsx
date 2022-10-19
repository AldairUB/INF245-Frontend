import React, { useState } from "react";
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

import { agregarAlumno, listarAlumnos } from "../../services/AlumnoServices"

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useEffect } from "react";
import DataTable from "react-data-table-component";

const ListaDeAlumnos = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [genero, setGenero] = useState("");
  const [codigo, setCodigo] = useState("");
  const [correo, setCorreo] = useState("");
  const [fechaCreacion, setFechaCreacion] = useState("");

  const [alumnos, setAlumnos] = useState([]);
  const [open, setOpen] = useState(false);
  const [insertado, setInsertado] = useState(false);

  const [nuevoAlumno, setNuevoAlumno] = useState({
    nombre: "",
    apellido: "",
    genero: "",
    codigoPUCP: "",
    correo: "",
    fechaCreacion: "",
  });

  const showData = async () => {
    try {
      const alumnos = await listarAlumnos();
      const data = alumnos.data;
      setAlumnos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showData();
    setInsertado(false);
  }, [insertado]);

  const columnas = [
    {
      name: "CODIGO",
      selector: (row) => row.codigoPUCP,
    },
    {
      name: "NOMBRE COMPLETO",
      selector: (row) => row.nombre + " " + row.apellido,
    },
    {
      name: "CORREO",
      selector: (row) => row.correo,
    }
  ];

  return (
    <div name="listadealumnos" className="h-screen w-full bg-white">
      <div className="flex w-full h-20"></div>

      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
        <div className="pb-10 mb-4 grid grid-cols-1">
          <p className="text-3xl font-bold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
            Lista de Alumnos
          </p>

        </div>

        <div className="pb-8 flex flex-row">
          <div className="w-72">
            <Input label="Nombre del Alumno" />
          </div>

          <div className="w-72  mx-12">
            <Select label="Filtro">
              <Option>Nombre</Option>
              <Option>Código PUCP</Option>
            </Select>
          </div>

          <div className="grid grid-cols-3 w-full">
            <div> </div>
            <div>
              <Button variant="contained" className="bg-blue-pucp ml-5">Agregar</Button>
            </div>
            <div>
              <Button variant="contained" className="bg-white text-blue-pucp border-b-3 ml-12">Ver detalle</Button>
            </div>
          </div>
        </div>
        <div>
          <div></div>

          <Box sx={{ height: 350, width: '100%' }} className="pb-5">
            <div className="pb-6 w-full" style={{ height: 350, width: "100%" }}>
              <DataTable
                columns={columnas}
                data={alumnos}
                pagination
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                onRowDoubleClicked={(event: RowDoubleClickedEvent) => console.log("Hola")}
              ></DataTable>
            </div>
          </Box>

        </div>


      </div>
    </div>
  );
};

export default ListaDeAlumnos