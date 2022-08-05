import React, { useState } from "react";
import appIcon from "../assets/Vectorapp-icon.png";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [popUp, setPopup] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="navbar fixed">
        <div className="icon-box">
          <a className="icon-box" href="/">
            <img src={appIcon} alt="app icon" />
            <h5>Untitled</h5>
          </a>
        </div>

        <div className="category-box">
          <a href="#">Product</a>
          <a href="#">Why ResBoard</a>
          <a href="#">How it works</a>
          <a href="#">Pricing</a>
          <a href="#">ResCommunity</a>
        </div>
        <div className="button-box">
          <h6 className="cursor-pointer">FAQs</h6>
          <button>Get in touch</button>
        </div>
        <div className="menu-status">
          {!popUp ? (
            <FiMenu
              className="text-[3rem] cursor-pointer hover:scale-125 transition-all"
              onClick={() => setPopup(!popUp)}
            />
          ) : (
            <GrClose
              className="text-[3rem] cursor-pointer hover:scale-125 transition-all"
              onClick={() => setPopup(!popUp)}
            />
          )}
        </div>
      </div>
      <div className="navbar"></div>
      <div className={popUp ? "floating-menubar-pop" : "floating-menubar"}>
        <a href="#">Product</a>
        <a href="#">Why ResBoard</a>
        <a href="#">How it works</a>
        <a href="#">Pricing</a>
        <a href="#">ResCommunity</a>
        <div className="button-box">
          <h6 className="cursor-pointer">FAQs</h6>
          <button>Get in touch</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
