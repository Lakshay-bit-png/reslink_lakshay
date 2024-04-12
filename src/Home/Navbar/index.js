import React, { useState } from "react";
import index from "./index.css";
import logo from "../../assets/logo.png";
import { RxCross2 } from "react-icons/rx";

export const Navbar = () => {
  const [crossenable, setCrossEnable] = useState(false);
  const drop = () => {
    setCrossEnable(!crossenable);
  };
  return (
    <>
      <div className="navigator">
        <div className="logo">
          <img src={logo} />
          <div className="logo-title">RESLINK</div>
        </div>
        <div className="navigator-options">
          <div className="options">Home</div>
          <div className="options">Features</div>
          <div className="options">About</div>
          <div className="options">Contact</div>
          <div className="options">Pricing</div>
        </div>
        <div className="jump">
          <div className="login">Login</div>
          <button className="start">Get Started</button>
        </div>
        <div className="hamburg-main">
          <div className="hamburg" onClick={drop}>
            <div
              className={crossenable === true ? "line-1-cust line-1" : "line-1"}
            ></div>
            <div
              className={crossenable === true ? "line-2-cust line-2" : "line-2"}
            ></div>
            <div
              className={crossenable === true ? "line-3-cust line-3" : "line-3"}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={
          crossenable == true ? "dropdown dropdown-display" : "dropdown"
        }
      >
        <div className="option-mobile">Home</div>
        <div className="option-mobile">Features</div>
        <div className="option-mobile">About </div>
        <div className="option-mobile">Contact</div>
        <div className="option-mobile">Pricing</div>
        <div className="option-mobile">Login</div>
        <div className="option-mobile">Get Started</div>
      </div>
    </>
  );
};
