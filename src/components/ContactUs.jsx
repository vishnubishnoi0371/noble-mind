import React, { useState } from "react";
import contactimg from "../Assets/webp/contact-img.webp";
import Commonbtn from "./Commonbtn";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    namelast: "",
    mail: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    namelast: "",
    mail: "",
    message: "",
  });
  const [formTouched, setFormTouched] = useState({
    name: false,
    namelast: false,
    mail: false,
    message: false,
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      namelast: /^[a-zA-Z\s]+$/,
      mail: /^[a-zA-Z\s]+@/,
    };
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is invalid.";
    } else if (!regex.name.test(formData.name)) {
      errors.name = "Name is invalid.";
    }
    if (!formData.namelast.trim()) {
      errors.namelast = "Last Name is invalid.";
    } else if (!regex.namelast.test(formData.namelast)) {
      errors.namelast = "Last Name is invalid.";
    }
    if (!formData.mail.trim()) {
      errors.mail = "Mail is invalid.";
    } else if (!regex.mail.test(formData.mail)) {
      errors.mail = "Mail is invalid.";
    }
    if (!formData.message.trim()) {
      errors.message = "message fill.";
    } else if (!regex.message.test(formData.message)) {
      errors.message = "message is invalid.";
    }
    setFormErrors(errors);
    setFormTouched({
      name: true,
      namelast: true,
      mail: true,
      message: true,
    });
    if (Object.keys(errors).length === 0) {
      setShowSuccessPopup(true);
    }
  };

  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    setFormData({
      name: "",
      namelast: "",
      mail: "",
      message: "",
    });
    setFormErrors({
      name: "",
      namelast: "",
      mail: "",
      message: "",
    });
    setFormTouched({
      name: false,
      namelast: false,
      mail: false,
      message: false,
    });
  };

  return (
    <div>
      <div id="service" className="container pt-md-5  pt-3 mt-2">
        <div className="row pt-lg-5 justify-content-between mt-lg-5">
          <div data-aos="zoom-in" className="col-lg-6 ">
            <h1 className="fw-semibold text-center text-lg-start ff-out fs-xl black-2 mb-2 lh-57">
              Contact <span className="fw-light">Us</span>
            </h1>
            <p className="mt-2 fs-md text-center mx-auto mx-lg-0 text-lg-start ff-exo fw-normal lh-24 mb-3 pb-1 gray-2 mw-410">
              Feel free to contact us any time. We will get back to you as soon
              as we can!{" "}
            </p>

            <form className="form_card pe-lg-5" onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-sm-6 col-12 mb-3 mb-sm-0">
                  <div className="form-group w-100 ">
                    <label
                      className="fw-normal ff-exo fs-md black-2 lh-24"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={
                        formTouched.name && formErrors.name ? "error" : ""
                      }
                    />
                    {formTouched.name && formErrors.name && (
                      <p className="error-message">{formErrors.name}</p>
                    )}
                  </div>
                </div>
                <div className="col-sm-6 col-12 ">
                  <div className="form-group w-100">
                    <label
                      className="fw-normal ff-exo fs-md black-2 lh-24"
                      htmlFor="namelast"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="namelast"
                      name="namelast"
                      value={formData.namelast}
                      onChange={handleChange}
                      className={
                        formTouched.namelast && formErrors.namelast
                          ? "error"
                          : ""
                      }
                    />
                    {formTouched.namelast && formErrors.namelast && (
                      <p className="error-message">{formErrors.namelast}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <label
                  className="fw-normal ff-exo fs-md black-2 lh-24"
                  htmlFor="mail"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="mail"
                  name="mail"
                  value={formData.mail}
                  onChange={handleChange}
                  className={formTouched.mail && formErrors.mail ? "error" : ""}
                />
                {formTouched.mail && formErrors.mail && (
                  <p className="error-message">{formErrors.mail}</p>
                )}
              </div>
              <div className="form-group mb-3">
                <label
                  className="fw-normal ff-exo fs-md black-2 lh-24"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  type="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={
                    formTouched.message && formErrors.message ? "error" : ""
                  }
                />
                {formTouched.message && formErrors.message && (
                  <p className="error-message">{formErrors.message}</p>
                )}
              </div>

              <Commonbtn type="submit" text="Submit" />
            </form>
            {showSuccessPopup && (
              <div className="success-popup">
                <p className="fw-bold pt-3">Form submitted successfully!</p>
                <div>
                  <Commonbtn click={handlePopupClose} text="Close" />
                </div>
              </div>
            )}
          </div>
          <div data-aos="zoom-in" className="col-lg-6 mt-4 mt-lg-0">
            <img className="w-100 contact-img" src={contactimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
