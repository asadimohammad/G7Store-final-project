import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";


const NavLinks = () => {
  let fName = 'Mohammad asadi'
  return (
    <nav>
    
      <ul className="d-flex gap-2">
        <li>
          <NavLink to="/shop" state={{sss:fName}}>Shop</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
