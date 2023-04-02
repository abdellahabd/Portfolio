import React, { useState, useEffect } from "react";
import { logo, menu, close } from "../assets";
import { styles } from "../styles.js";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
const Navbar = () => {
  const [Action, setAction] = useState("");
  const [toggel, settoggel] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} flex items-center w-full top-0 py-3 fixed z-20`}
    >
      <div className="w-full flex justify-between max-w-7xl mx-auto items-center">
        <Link
          className="flex items-center gap-2"
          to="/"
          onClick={() => {
            setAction("");
            window.scroll(0, 0);
          }}
        >
          <img src={logo} alt="logo " className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex content-center">
            Abdellah &nbsp;<span className="sm:block hidden">| Ouazane</span>
          </p>
        </Link>

        <ul className="list-none sm:flex flex-row   gap-10 hidden ">
          {navLinks.map((link) => (
            <li
              className={`${
                Action == link.id ? "text-white" : "text-secondary"
              } cursor-pointer hover:text-white  text-[18px]`}
              key={link.id}
              onClick={() => {
                setAction(link.id);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex  justify-end flex-1 ">
          <img
            className="object-contain w-[28px] h-[28px] cursor-pointer"
            src={toggel ? close : menu}
            onClick={() => {
              settoggel(!toggel);
            }}
          ></img>
          <div>{/* for mobile nab bar  */}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
