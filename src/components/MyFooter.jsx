import React from "react";
import logo from "../Assets/svg/fit-logo.svg";
import facebook from "../Assets/svg/facebook.svg";
import insta from "../Assets/svg/insta.svg";
import twiter from "../Assets/svg/twiter.svg";
import linkdin from "../Assets/svg/linkdin.svg";

const MyFooter = () => {
  return (
    <div className="ft-bg pt-lg-5 ">
      <div className="container  pt-5">
        <div className="row justify-content-between pt-5">
          <div className="col-md-4 col-12">
            <img className="mb-2" src={logo} alt="ft-logo" />
            <p className="fs-md fw-normal ff-exo lh-24 text-white mt-3">
              Follow Us
            </p>
            <div className="d-flex gap-3 align-items-center">
              <a
                href="https://www.facebook.com/login/"
                target="blank"
                className="social-circle d-flex justify-content-center align-items-center"
              >
                <img src={facebook} alt="icon" />
              </a>
              <a
                href="https://www.instagram.com/accounts/login/"
                target="blank"
                className="social-circle d-flex justify-content-center align-items-center"
              >
                <img src={insta} alt="insta" />
              </a>
              <a
                href="https://twitter.com/i/flow/login"
                target="blank"
                className="social-circle d-flex justify-content-center align-items-center"
              >
                <img src={twiter} alt="icon" />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="blank"
                className="social-circle d-flex justify-content-center align-items-center"
              >
                <img src={linkdin} alt="icon" />
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12 mt-4 mt-lg-0">
            <div className="row">
              <div className="col-6">
                <h2 className="ff-out mb-3 fs-md fw-semibold lh-24 text-white">
                  Maine
                </h2>
                <ul className="ps-0">
                  <li className="mb-3">
                    <a
                      href="#home"
                      className="ff-exo fw-normal fs-md gray-2 lh-24 underline-hover2 text-decoration-none "
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#about"
                      className="ff-exo fw-normal fs-md gray-2 lh-24 underline-hover2 text-decoration-none "
                    >
                      About us
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#service"
                      className="ff-exo fw-normal fs-md gray-2 lh-24 underline-hover2 text-decoration-none "
                    >
                      services
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#chose"
                      className="ff-exo fw-normal fs-md gray-2 lh-24 underline-hover2 text-decoration-none "
                    >
                      Why Choose Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <h2 className="ff-out mb-3 fs-md fw-semibold lh-24 text-white">
                  Legal
                </h2>
                <ul className="ps-0">
                  <li className="mb-3">
                    <a
                      href="#home"
                      className="ff-exo fw-normal fs-md gray-2 lh-24 underline-hover2 text-decoration-none "
                    >
                      Term & Conduction
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#about"
                      className="ff-exo fw-normal fs-md gray-2 lh-24 underline-hover2 text-decoration-none "
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#service"
                      className="ff-exo fw-normal fs-md gray-2 lh-24 underline-hover2 text-decoration-none "
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="tel:(629) 555-0129"
                      className="ff-exo fw-normal fs-md gray-2 lh-24 underline-hover2 text-decoration-none "
                    >
                      (629) 555-0129
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-100 ft-line" />
      <p className="ff-exo fw-normal fs-sm gray-2 lh-21 pb-4 mb-0 pt-2 text-center">
        © Copyright 2024 Noble Mind | All rights reserved.
      </p>
    </div>
  );
};

export default MyFooter;
