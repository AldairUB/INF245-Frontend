import React from "react";
import StudentTeacherImage from "../assets/studentXteacher.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full w-1/3">
          <h2 className="text-4xl sm:text-6xl font-bold text-blue-900">
            Sistema de Gestión de Tesis
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Bienvenido al Sistema de Gestión de Tesis PUCP. Elija la opción más adecuada a sus necesidades en la barra derecha.
          </p>

        </div>

        <div className="flex-col w-2/3">
          <img
            src={StudentTeacherImage}
            alt="main image"
            className="rounded-2xl mx-auto w-2/3 md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
