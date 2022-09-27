import React from "react"; 
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import { BiTask } from "react-icons/bi";


const PendientesPorCorregir = () => {
  return (
    <div
      name="pendientesporcorregir"
      className="w-full h-screen bg-white"
    >
      <div className="flex w-full h-20"></div>

      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-start w-full h-full">
        <div className="pb-10 grid grid-cols-2">          
          <p className="text-3xl font-semibold inline border-b-4  text-blue-900 flex-auto border-blue-900">
            INF391 - Proyecto de Tesis
          </p>
          <p className="text-3xl font-semibold inline border-b-4  text-blue-900 flex-auto border-blue-900 text-right">
            2022-2
          </p>
        </div>

        <div className="pb-8 grid grid-cols-2">  
          <p className="text-3xl font-semibold inline border-b-4  text-amber-600 flex-auto border-amber-600">
            Pendientes por corregir
          </p>
          <p className="text-3xl font-semibold inline border-b-4  text-white flex-auto border-amber-600 text-right">
            -
          </p>        
        </div>

        <div className="max-w-screen-lg mx-auto flex flex-col justify-start w-full text-right">
          <p className="text-1xl font-normal inline pr-6 pb-4 text-blue-gray-700">
            Fecha de entrega
          </p>
        </div>

        <div className="pb-2">
        <Link to="/listaentregablespendientes">
          <Card className="h-20">
            <CardBody>
              <div className="grid grid-cols-3 gap-4" > 
                <div classname="md:flex-row inline-block">  
                  <BiTask size={30} />           
                </div>
                <div classname="md:flex-row inline-block text-left">  
                  <p className="text-2xl font-semibold inline">
                    Entregable 1
                  </p>              
                </div>
                <div className ="text-right">
                  <p className="text-1xl font-normal inline">
                    15 de agosto, 23:57
                  </p>
                </div>
              </div>           
            </CardBody>                       
          </Card>
          </Link>
        </div>

        <div className="pb-2">
          <Card className="h-20">
            <CardBody>
              <div className="grid grid-cols-3 gap-4" > 
                <div classname="md:flex-row inline-block">  
                  <BiTask size={30} />           
                </div>
                <div classname="md:flex-row inline-block text-left">  
                  <p className="text-2xl font-semibold inline">
                    Entregable 2
                  </p>              
                </div>
                <div className ="text-right">
                  <p className="text-1xl font-normal inline">
                    15 de agosto, 23:57
                  </p>
                </div>
              </div>           
            </CardBody>                       
          </Card>
        </div>

        <div className="pb-2">
          <Card className="h-20">
            <CardBody>
              <div className="grid grid-cols-3 gap-4" > 
                <div classname="md:flex-row inline-block">  
                  <BiTask size={30} />           
                </div>
                <div classname="md:flex-row inline-block text-left">  
                  <p className="text-2xl font-semibold inline">
                    Entregable 3
                  </p>              
                </div>
                <div className ="text-right">
                  <p className="text-1xl font-normal inline">
                    15 de agosto, 23:57
                  </p>
                </div>
              </div>           
            </CardBody>                       
          </Card>
        </div>

      </div>
    </div>
  );
};

export default PendientesPorCorregir;