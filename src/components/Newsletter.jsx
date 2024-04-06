import React from "react";

const Newsletter = () => {
  return (
    <div id="blog" className="newslatter mt-md-5">
      <div className="container news-bg mx-auto py-5 mt-md-5 ">
        <h1
          data-aos="zoom-in"
          className="fs-xl fw-light white-2 lh-57 ff-out  mt-3 text-center"
        >
          Subscribe to our <span className="fw-semibold"> Newsletter!</span>
        </h1>
        <p
          data-aos="zoom-in"
          className="fs-md fw-normal ff-exo lh-24 white-2 text-center mt-2 mb-4 pb-3"
        >
          Be the first to get exclusive offers and the latest news.
        </p>
        <div
          data-aos="zoom-in"
          className="d-flex bg_mail mw-410 mb-3 comp-mail flex-colum mx-auto align-items-center justify-content-between"
        >
          <input
            placeholder="Enter  your email"
            className="mail-bg py-4  text-white ps-4 mw-448 d-flex mx-auto"
            type="email"
            id="email"
            name="email"
          />
          <div>
            <button className="d-none d-md-block sub-btn text-white fw-semibold me-2 ff-out lh-24 fs-md">
              Subscribe
            </button>
          </div>
        </div>
        <button className="d-block mx-auto d-md-none sub-btn mt-4 text-white fw-semibold  ff-out lh-24 fs-md">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
