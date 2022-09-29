import React from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Select, Option } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const GestionFacultades = () => {

    const rows: GridRowsProp = [
        { id: 1, col1: 'FA001', col2: 'Arquitectura y Urbanismo'},
        { id: 2, col1: 'FA001', col2: 'Arte y Diseño'},
        { id: 3, col1: 'FA001', col2: 'Artes Escénicas'},
        { id: 4, col1: 'FA001', col2: 'Ciencias Sociales'},
        { id: 5, col1: 'FA001', col2: 'Ciencias e Ingeniería'}
    ];
    
    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Código', width: 250 },
        { field: 'col2', headerName: 'Nombre de Facultad', width: 450 }
    ];

    return (
        <div
            name="listaentregablespendientes"
            className="h-screen w-full bg-white"
        >
            <div className="flex w-full h-20"></div>
            <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-full">
            <div className="pb-10 grid grid-cols-2">          
                <p className="text-3xl font-semibold inline border-b-4  text-blue-900 flex-auto border-blue-900">
                    Gestión de Facultades
                </p>
                <p className="text-3xl font-semibold inline border-b-4  text-blue-900 flex-auto border-blue-900 text-right">
                </p>
            </div>

        <div className="pb-8 grid grid-cols-2">        
        </div>

        <div className="pb-8 flex flex-row">
          <div className="w-72">
            <Input label="Nombre de la facultad" />
          </div>

          <div className="w-48  mx-6">
            <Select label="Filtro de búsqueda">
              <Option>Por revisar</Option>
              <Option>Revisados</Option>
              <Option>No entregados</Option>
            </Select>
          </div>

          <Button className="ml-3 bg-blue-pucp">Buscar</Button>
          <Button className="ml-3 bg-blue-pucp">Agregar</Button>
          <Button className="ml-3 bg-blue-pucp">Eliminar</Button>
        </div>

        <div className="pb-6" style={{ height: 350, width: '100%' }}>
          <Link to="/gestionentrega">
            <DataGrid rows={rows} columns={columns} />
          </Link>
        </div>
      </div>
    </div>
    )
};

export default GestionFacultades;