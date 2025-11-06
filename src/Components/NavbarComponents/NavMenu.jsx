import React, { useContext } from "react";
import { NavLink } from "react-router-dom";


const NavMenu = () => {

  return (
    <ul className="flex gap-4   " id="navbarUL">
      <li>
        <NavLink className="py-1" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="py-1" to={"/contactus"}>
          ContactUs
        </NavLink>
      </li>
      <li>
        <NavLink className="py-1" to={"/services"}>
          Services
        </NavLink>
      </li>
    </ul>
  );
};

export default NavMenu;
