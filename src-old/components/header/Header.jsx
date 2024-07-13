import React from "react";
import NavLinks from "../NavLinks";

function Header({setShowCart , cartList , fname}) {
  // let {setShowCart , cartList , fname}  = props
  return (
    <header className="header d-flex jc-sb items-center bg_gray p-6 txt_white">
      <div className="logo">
        <h2 onClick={() => setShowCart(false)}>LOGO</h2>
        <h4 onClick={() => setShowCart(true)}>Cart {cartList.length}</h4>
      </div>
      <NavLinks />
      {
        fname !=='' ? <h3>welcome {fname}</h3> : ''
      }
      
    </header>
  );
}

export default Header;

