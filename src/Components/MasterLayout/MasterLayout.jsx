import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import Slider from "../Slider/Slider";
import style from "./MasterLayout.module.scss";

export default function MasterLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`${style.main}`}>
        <div className={`${style.slider}`}>
          <Slider />
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}
