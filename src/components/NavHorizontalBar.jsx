import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Pucp from "../assets/pucp.png";

const NavHorizontalBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-start items-center w-full h-20 px-4 text-white bg-blue-pucp fixed">
      <div className="h-20 justify-center items-center flex">
        <img
              src={Pucp}
              alt="horizontal navbar image"
              className="rounded-2xl mx-auto max-h-full md:w-4/5"
            />
      </div>
      <div className="flex">
        <h1 className="text-5xl font-bold ml-2">PUCP</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavHorizontalBar;
