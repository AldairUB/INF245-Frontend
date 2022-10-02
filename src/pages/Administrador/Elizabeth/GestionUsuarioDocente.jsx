import React from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Switch } from "@material-tailwind/react";


const GestionUsuarioDocente = () => {
  return (
    <div
      name="gestionusuariodocente"
      className="h-screen w-full bg-white"
    >
      <div className="flex w-full h-20"></div>
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-fit">
        <div className="pb-10 mb-4 grid grid-cols-1">          
          <p className="text-3xl font-semibold inline border-b-4  text-blue-pucp flex-auto border-blue-pucp">
            Gestión de Docentes {">"} Rony Cueva
          </p>          
        </div>

        <div className="pb-8 ">  
          <p className="text-2xl font-semibold inline  text-amber-800 flex-auto">
            Datos personales
          </p>      
        </div>

        <div className="pb-1 flex flex-col w-full">        
          <div className="w-1/2 mb-4 pr-2">
            <Input label="DNI"/>
          </div>
        </div>

        <div className="pb-8 flex flex-col w-full">

          <div className="flex flex-row">
            <div className="w-1/2 mb-4 mr-2">
              <Input label="Nombres" />
            </div>

            <div className="w-1/2 mb-4 ml-2">
              <Input label="Apellidos" />
            </div>
          </div>

        </div>

        <div className="pb-8 ">  
          <p className="text-2xl font-semibold inline  text-amber-800 flex-auto">
            Identificación y Correo
          </p>      
        </div>

        <div className="pb-5 flex flex-col w-full">

          <div className="flex flex-row">
            <div className="w-1/2 mb-4 mr-2">
              <Input label="Código" />
            </div>

            <div className="w-1/2 mb-4 ml-2">
              <Input label="Correo" />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-1/2 mb-4 mr-2">
              <Select label="Facultad">
                <Option>Arquitectura y Urbanismo</Option>
                <Option>Arte y Diseño</Option>
                <Option>Artes Escénicas</Option>
                <Option>Ciencias Sociales</Option>
                <Option>Ciencias e Ingeniería</Option>
              </Select>
            </div>

            <div className="w-1/2 mb-4 ml-2">
              <Select label="Especialidad">
                <Option>Ingeniería Industrial</Option>
                <Option>Ingeniería Informática</Option>
              </Select>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-1/2 mb-4 mr-2">
              <Select label="Tipo de Usuario">
                <Option>Alumno</Option>
                <Option>Asesor</Option>
              </Select>
            </div>

            <div className="w-1/2 mb-4 ml-2">
              <p className="text-sm font-semibold inline text-blue-gray-500 flex-auto">
                Permisos
              </p> 
              <div className="flex flex-row w-max gap-4 pl-4">
                <Switch color="orange"/>
                <p className="text-sm font-light inline text-blue-gray-500 flex-auto pr-11">
                Asesor
                </p>
                <Switch color="orange"/>
                <p className="text-sm font-light inline text-blue-gray-500 flex-auto pr-11">
                Jurado
                </p>
                <Switch color="orange"/>
                <p className="text-sm font-light inline text-blue-gray-500 flex-auto">
                Profesor
                </p>
              </div>
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

export default GestionUsuarioDocente;