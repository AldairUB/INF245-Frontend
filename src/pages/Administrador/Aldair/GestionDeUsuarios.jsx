import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

import { Select, Option } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

import {listarUsuarios} from '../../../services/UsuarioServices';
import DataTable from "react-data-table-component";

const GestionDeUsuarios= () => {

  const [search, setSearch] =
    useState(""); /*Default: muestra todo copia de users */
  const [filtered, setFiltered] = useState([]);

  const [users, setUsers] = useState([]);
  const showData = async () => {
    try {
      const usuarios = await listarUsuarios();
      const data = usuarios.data;
      setUsers(data);
      setFiltered(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showData();
  }, []);

  useEffect(() => {
    const result = users.filter((user) => {
      return user.apellido.toLowerCase().match(search.toLowerCase());
    });
    setFiltered(result);
  }, [search]);

  const columnas = [
    {
      name: "Código",
      selector: (row) => row.codigoPUCP,
      sortable: true,
    },
    {
      name: "Nombre Completo",
      selector: (row) => row.nombre + " " + row.apellido,
      sortable: true,
    },
    {
      name: "Correo Electrónico",
      selector: (row) => row.correo,
      sortable: true,
    },
  ];


  return (
    <div
      name="gestiondeusuarios"
      className="h-screen w-full bg-white"
    >
      <div className="flex w-full h-20"></div>
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-full">
        <div className="pb-10 mb-4 grid grid-cols-1">          
          <p className="text-3xl font-semibold inline border-b-4 text-blue-pucp flex-auto border-blue-pucp">
            Gestión de Usuarios
          </p>
        </div>

        <div className="pb-8 flex flex-row">
          <div className="w-72">
            <Input 
            label="Buscar" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="w-72  mx-12">
            <Select label="Especialidad">
              <Option>Ingeniería Informática</Option>
              <Option>Ingeniería Industrial</Option>
              <Option>Ingeniería Mecatrónica</Option>
              <Option>Física</Option>
              <Option>Química</Option>
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
          
            <DataTable
                columns={columnas}
                data={filtered}
                pagination
                selectableRows
                selectableRowsHighlight
                highlightOnHover
            ></DataTable>
    
        </div>
      </div>
    </div>
  );
};

export default GestionDeUsuarios;
