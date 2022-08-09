import React, { useState } from "react";
import appIcon from "../assets/Vectorapp-icon.png";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [popUp, setPopup] = useState(false);
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="navbar-container">
      <div className="navbar fixed">
        <div className="icon-box">
          <a className="icon-box" href="#home">
            <img src={appIcon} alt="app icon" />
            <h5>Untitled</h5>
          </a>
        </div>

        <div className="category-box">
          <a
            href="#product"
            onClick={() => setActiveNav("#product")}
            className={activeNav == "#product" ? "active" : ""}
          >
            Product
          </a>
          <a
            href="#home"
            onClick={() => setActiveNav("#home")}
            className={activeNav == "#home" ? "active" : ""}
          >
            Why ResBoard
          </a>
          <a
            href="#howitworks"
            onClick={() => setActiveNav("#howitworks")}
            className={activeNav == "#howitworks" ? "active" : ""}
          >
            How it works
          </a>
          <a
            href="#pricing"
            onClick={() => setActiveNav("#pricing")}
            className={activeNav == "#pricing" ? "active" : ""}
          >
            Pricing
          </a>
          <a
            href="#community"
            onClick={() => setActiveNav("#community")}
            className={activeNav == "#community" ? "active" : ""}
          >
            ResCommunity
          </a>
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
        <a
          href="#product"
          onClick={() => {
            setPopup(!popUp);
            setActiveNav("#product");
          }}
          className={activeNav == "#product" ? "active" : ""}
        >
          Product
        </a>
        <a
          href="#home"
          onClick={() => {
            setPopup(!popUp);
            setActiveNav("#home");
          }}
          className={activeNav == "#home" ? "active" : ""}
        >
          Why ResBoard
        </a>
        <a
          href="#howitworks"
          onClick={() => {
            setPopup(!popUp);
            setActiveNav("#howitworks");
          }}
          className={activeNav == "#howitworks" ? "active" : ""}
        >
          How it works
        </a>
        <a
          href="#pricing"
          onClick={() => {
            setPopup(!popUp);
            setActiveNav("#pricing");
          }}
          className={activeNav == "#pricing" ? "active" : ""}
        >
          Pricing
        </a>
        <a
          href="#community"
          onClick={() => {
            setPopup(!popUp);
            setActiveNav("#community");
          }}
          className={activeNav == "#community" ? "active" : ""}
        >
          ResCommunity
        </a>
        <div className="button-box">
          <h6 className="cursor-pointer">FAQs</h6>
          <button>Get in touch</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
