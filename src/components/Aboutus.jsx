import React from "react";
import aboutimg from "../Assets/webp/about-img.webp";
import stars from "../Assets/svg/star.svg";
import Commonbtn from "./Commonbtn";
import elp1 from "../Assets/webp/triangle-elp.png";

const Aboutus = () => {
  return (
    <div className="position-relative">
      <div id="about" className="container pt-md-5 pt-3 mt-2">
        <div className="row flex-column-reverse flex-lg-row justify-content-between pt-lg-5 mt-lg-5">
          <div data-aos="zoom-in" className="col-lg-6  col-12 mt-4 mt-lg-0">
            <img
              className="w-100 max-h pe-xl-5"
              src={aboutimg}
              alt="about-img"
            />
          </div>
          <div
            data-aos="zoom-in"
            className="col-lg-6 col-12 d-flex flex-column  justify-content-center"
          >
            <div className="d-flex align-items-center text-center text-lg-start mx-auto mx-lg-0 mb-1 gap-2 ">
              <img src={stars} alt="star" />
              <p className="fw-normal fs-md lh-24 ff-exo black-2 mb-0">
                About us
              </p>
            </div>
            <h1 className="text-black ff-out lh-57 text-center text-lg-start fs-xxl fw-light  mw-520">
              Pioneering Vision & Mission-
              <span className="lh-57 fs-xl lh-57 fw-semibold">
                Driven Sectoral Innovation
              </span>
            </h1>
            <p className="ff-exo fs-md fw-normal text-center text-lg-start gray-2 lh-24 mb-3  mb-xl-5 mw-490">
              Imagine a future in Saudi Arabia influenced by the potential of
              Al, with Noble Mind at the forefront of this transformation.
              Healthcare stands to gain with the promise of enhanced data
              precision. In education, there's the potential for individualized
              learning experiences. Finance could witness seamless transactions,
              and entertainment may revel in customized experiences. Through
              Al's promise, transportation could innovate and cities might adapt
              smarter infrastructures. In every domain, the vision of Noble Mind
              hints at a brighter, more efficient nation.
            </p>
            <div className="mx-auto mx-lg-0">
              <Commonbtn text="Read More" />
            </div>
          </div>
        </div>
      </div>
      <img
        className="position-absolute d-none d-lg-block elip-2 ep-img"
        src={elp1}
        alt="star"
      />
    </div>
  );
};

export default Aboutus;
