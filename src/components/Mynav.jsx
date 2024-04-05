import React, { useState } from "react";
import logo from "../Assets/svg/logo.svg";
import Commonbtn from "./Commonbtn";

const Mynav = () => {
  const [nav, setNav] = useState(false);
  function setopen() {
    setNav(!nav);
    if (nav === false) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }
  return (
    <div>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-19">
          <img src={logo} alt="icon" />
          <div className="d-flex align-items-center justify-content-center gap-40">
            <ul
              className={`${
                nav ? "left_0" : "left-0"
              } d-flex flex-column  justify-content-center   align-items-center   flex-lg-row gap-4 mb-0 ps-0 my_nav`}
            >
              <li className="">
                <a
                  href="#home"
                  onClick={setopen}
                  className="underline-hover text-decoration-none lh-24 fs-md fw-normal gray-2 ff-exo nav-head"
                >
                  Home
                </a>
              </li>
              <li className="">
                <a
                  href="#about"
                  onClick={setopen}
                  className="underline-hover text-decoration-none lh-24 fs-md fw-normal gray-2 ff-exo nav-head"
                >
                  About us
                </a>
              </li>
              <li className="">
                <a
                  href="#service"
                  onClick={setopen}
                  className="underline-hover text-decoration-none lh-24 fs-md fw-normal  gray-2 ff-exo nav-head"
                >
                  Services
                </a>
              </li>
              <li className="">
                <a
                  href="#chose"
                  onClick={setopen}
                  className="underline-hover text-decoration-none lh-24 fs-md fw-normal  gray-2 ff-exo nav-head"
                >
                  Why Chose us
                </a>
              </li>
              <li className="">
                <a
                  href="#blog"
                  onClick={setopen}
                  className="underline-hover text-decoration-none lh-24 fs-md fw-normal gray-2 ff-exo nav-head"
                >
                  Blogs
                </a>
              </li>
              <li className="">
                <a
                  href="#faq"
                  onClick={setopen}
                  className="text-decoration-none underline-hover lh-24 fs-md fw-normal gray-2 ff-exo nav-head"
                >
                  FAQ
                </a>
              </li>
              <div className="d-block d-lg-none ">
              <Commonbtn text="Contact us" />
            </div>
            </ul>
            <div onClick={setopen}>
              {nav ? (
                <div className=" icon d-flex d-lg-none flex-column justify-content-between position-relative ">
                  <span className=" span1 crossLine1"></span>
                  <span className=" span3 crossLine2"></span>
                </div>
              ) : (
                <div className="  icon d-flex d-lg-none flex-column justify-content-between">
                  <span className=" span1"></span>
                  <span className=" position-relative span2"></span>
                  <span className=" span3"></span>
                </div>
              )}
            </div>
            <div className="d-none d-lg-block">
              <Commonbtn text="Contact us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mynav;
