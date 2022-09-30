import React from "react";
import { Link } from "react-router-dom";
import { Select, Option } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import { BiTask } from "react-icons/bi";

const GestionEntrega = () => {
  return (
    <div name="gestionentrega" className="h-screen w-full bg-white">
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

        <div className="pb-8 ">
          <p className="text-3xl font-semibold inline  text-amber-600 flex-auto">
            Entregable 1 - Iván Córdova Rivero
          </p>
        </div>

        <div className="flex mb-14">
          <p className="text-1xl font-semibold inline  text-blue-900 flex-auto">
            Ingrese los documentos necesarios y la nota asignada al entregable
            correspondiente.
          </p>
        </div>

        <div className="pb-2">
          <Card className="h-41">
            <CardBody>
              <div className="grid grid-cols-3 gap-4 pb-7 justify-center">
                <div classname="md:flex-row inline-block">
                  <BiTask size={30} />
                </div>
                <div classname="md:flex-row inline-block text-left">
                  <p className="text-2xl font-semibold inline">
                    Fecha de entrega
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-1xl font-normal inline">
                    Jueves 09 de Setiembre, 23:59
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pb-7 justify-center">
                <div classname="md:flex-row inline-block">
                  <BiTask size={30} />
                </div>
                <div classname="md:flex-row inline-block text-left">
                  <p className="text-2xl font-semibold inline">
                    Estado de entrega
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-1xl font-normal inline">Por revisar</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pb-7 justify-center">
                <div classname="md:flex-row inline-block">
                  <BiTask size={30} />
                </div>
                <div classname="md:flex-row inline-block text-left">
                  <p className="text-2xl font-semibold inline">
                    Última modificación
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-1xl font-normal inline">
                    Martes 07 de Septiembre, 11:42
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="pb-8 mt-6 ">
          <p className="text-2xl font-semibold inline  text-amber-600 flex-auto">
            Entregable
          </p>
        </div>
      </div>
    </div>
  );
};

export default GestionEntrega;
