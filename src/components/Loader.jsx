import React, { useEffect, useState } from "react";

const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflow = "";
    }, 4000);

    return () => clearTimeout(delay);
  }, []);
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div
      className=" duration-300 vw-100 vh-100 bg_light position-fixed top-0 start-0 "
      style={{ display: isLoaded ? "none" : "block", zIndex: 9999 }}
    >
      <div className="d-flex flex-column gap-3 align-items-center  h-100 justify-content-center">
        <h1 className="fs-xxl ff-exo  fw-semibold text-white">Noble_Mind</h1>
        <section class="dots-container gap-2">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </section>
      </div>
    </div>
  );
};

export default Loader;
