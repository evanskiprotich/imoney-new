import React, { useState } from "react";
import logo from "./img/logo.png";
import "./css/Navbar.css"

const NavLink = ({ text, href }) => {
  return (
    <li>
      <a
        href={href}
        className="block text-gray-800 font-semibold py-2 px-4 hover:bg-gray-300 rounded transition duration-200"
      >
        {text}
      </a>
    </li>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <a href="/">
          <img id="nav-logo" alt="iMoney logo" src={logo} />
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={handleToggle}
          className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline"
        >
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>
      <div
        className={
          isOpen
            ? "w-full block flex-grow lg:flex lg:items-center lg:w-auto"
            : "hidden lg:block"
        }
      >
        <ul className="text-md lg:flex-grow lg:flex lg:justify-end">
          {["Home", "Login", "SignUp"].map((text, index) => (
            <NavLink key={index} text={text} href="/login" />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
