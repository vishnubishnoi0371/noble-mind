import React from "react";
import elp1 from "../Assets/webp/triangle-elp.png";

const MyAccordion = () => {
  return (
    <div id="faq" className="pt-lg-5 position-relative mt-lg-5">
      <div className="container pt-md-5  pt-3 mt-2">
        <h1 className="ff-out fw-light lh-57 text-center mb-2 black-2 fs-xl">
          Frequently <span className="fw-semibold">Asked Questions</span>{" "}
        </h1>
        <p className="fw-normal ff-exo fs-md lh-24  mx-auto gray-2 mb-3 mb-md-5 text-center mw-495 mt-2">
          Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu volutpat
          mi leo. Nibh nisl consequat metus.
        </p>
        <div className="accordion mw-775 mx-auto mt-1" id="accordionExample">
          <div data-aos="zoom-in" className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button fw-medium fs-md lh-24 gray-2 ff-out"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is Artificial Intelligence (AI)?{" "}
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body fs-md lh-24  ff-exo fw-normal gray-2">
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button fw-medium fs-md lh-24 gray-2 ff-out"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How does AI benefit our company?{" "}
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body fs-md lh-24  ff-exo fw-normal gray-2">
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button fw-medium fs-md lh-24 gray-2 ff-out"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What types of AI technologies are relevant to our industry?{" "}
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body fs-md lh-24  ff-exo fw-normal gray-2">
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button fw-medium fs-md lh-24 gray-2 ff-out"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapsefour"
              >
                How can our employees adapt to AI integration?{" "}
              </button>
            </h2>
            <div
              id="collapsefour"
              className="accordion-collapse collapse"
              aria-labelledby="headingfour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body fs-md lh-24  ff-exo fw-normal gray-2">
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingfive">
              <button
                className="accordion-button fw-medium fs-md lh-24 gray-2 ff-out"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefive"
                aria-expanded="false"
                aria-controls="collapsefive"
              >
                How can our company ensure data security with AI?{" "}
              </button>
            </h2>
            <div
              id="collapsefive"
              className="accordion-collapse collapse"
              aria-labelledby="headingfive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body fs-md lh-24  ff-exo fw-normal gray-2">
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="position-absolute elip-5 ep-img" src={elp1} alt="ellip" />
      <img
        className="position-absolute elip-6 d-none d-lg-block ep-img"
        src={elp1}
        alt="ellip"
      />
      <img
        className="position-absolute elip-7 d-none d-lg-block ep-img"
        src={elp1}
        alt="ellip"
      />
    </div>
  );
};

export default MyAccordion;
