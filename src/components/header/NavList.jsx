import React from "react";
import Nav from "./Nav";

const NavList = () => {
  let list = [
    { path: "/contact-us", txt: "Contact Us" },
    { path: "/about-us", txt: "About Us" },
    { path: "/blog", txt: "Blog" },
  ];

  return (
    <ul>
      {list.map((item, index) => (
        <Nav key={index} path={item.path} txtRoute={item.txt} />
      ))}
    </ul>
  );
};

export default NavList;
