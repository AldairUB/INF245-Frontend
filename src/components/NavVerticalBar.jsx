import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiCalendarExclamation } from "react-icons/bi";
import { BiTask } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { AiFillFileText } from "react-icons/ai";
import { Link } from "react-router-dom";



const NavVerticalBar = () => {
  const links = [
    {
      id: 1,
      child: (

        <Link to="/"
        className="flex justify-between items-center w-full text-white"
        rel="noreferrer"
        >
          Inicio <AiOutlineHome size={25} />
        </Link>

      ),
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <Link to="/pendientesporcorregir"
        className="flex justify-between items-center w-full text-white"
        rel="noreferrer"
        >
          Pendientes <BiCalendarExclamation size={25} />
        </Link>
      ),
    },
    {
      id: 3,
      child: (

        <Link to="/listaentregablespendientes"
        className="flex justify-between items-center w-full text-white"
        rel="noreferrer"
        >
          Tareas <BiTask size={25} />
        </Link>

      ),
    },
    {
      id: 4,
      child: (

        <Link to="/listaentregablespendientes"
        className="flex justify-between items-center w-full text-white"
        rel="noreferrer"
        >
          Participantes <FiUsers size={25} />
        </Link>

      ),
    },
    {
      id: 5,
      child: (

        <Link to="/listaentregablespendientes"
        className="flex justify-between items-center w-full text-white"
        rel="noreferrer"
        >
          Documentos <AiFillFileText size={25} />
        </Link>

      ),
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-2.5 ml-[-115px] hover:ml-[-3px] hover:rounded-md duration-300 bg-blue-pucp" +
              " " +
              style
            }
          >
              {child}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavVerticalBar;
