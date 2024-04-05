import React from "react";
import Mynav from "./Mynav";
import stars from "../Assets/svg/star.svg";
import elp1 from "../Assets/webp/triangle-elp.png";

const Herosec = () => {
  return (
    <div className="hero_bg position-relative vh-100 flex-column d-flex">
      <div className="z-2">
        <Mynav />
      </div>
      <div
        id="home"
        className="container z-1 d-flex flex-column justify-content-center flex-grow-1"
      >
        <div className="">
          <div className="d-flex gap-2">
            <img src={stars} alt="star" />
            <p className="fw-normal fs-md lh-24 ff-exo black-2 mb-0">
              AI With Noble Mind
            </p>
          </div>
          <h1 className="text-black ff-out lh-76 fs-xxl fw-light mw-584">
            Inspiring Innovation, Elevating Solutions –{" "}
            <span className="lh-57 fs-xl fw-semibold"> Noble Mind"</span>
          </h1>
          <p className="fs-md fw-normal ff-exo lh-24 gray-2 mb-0 mt-3 mw-584">
            At Noble Mind is a forward-thinking AI specialised company dedicated
            to reshaping the future of how we live, work, and learn. Our mission
            is to create ground-breaking AI solutions for Healthcare, Education,
            and beyond, aligning with Saudi Arabia’s Vision 2030.”
          </p>
        </div>
      </div>
      <img className="position-absolute elip-1 ep-img" src={elp1} alt="star" />
      <span className="h-100 w-100 d-block d-lg-none position-absolute bg_layer z-0"></span>
    </div>
  );
};

export default Herosec;
