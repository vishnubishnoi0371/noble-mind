import React, { useState } from "react";
import stars from "../Assets/svg/star.svg";
import three from "../Assets/svg/three.svg";
import two from "../Assets/svg/two.svg";
import one from "../Assets/svg/one.svg";
import slideimg from "../Assets/webp/slide-img.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import elp1 from "../Assets/webp/triangle-elp.png";

const MySlide = () => {
  const [centerSlideIndex, setCenterSlideIndex] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speedAutoplay: 0,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
    afterChange: (currentSlideIndex) => {
      setCenterSlideIndex((currentSlideIndex + 1) % 3);
    },
  };

  return (
    <div id="chose" className=" pt-md-5  pt-3 mt-2 position-relative">
      <div className="container mx-auto pt-lg-5 mt-lg-5">
        <div className="d-flex align-items-center mb-2 justify-content-center mb-1 gap-2">
          <img src={stars} alt="star" />
          <p className="fw-normal fs-md lh-24 ff-exo black-2 mb-0">
            Why Choose Us
          </p>
        </div>
        <h1 className="text-black ff-out text-center mx-auto lh-57 mb-2 mb-md-5 fs-xl fw-light mw-520">
          Driving Innovation &{" "}
          <span className="lh-57 fs-xl lh-57 fw-semibold">
            Transforming Industries{" "}
          </span>
        </h1>
        <Slider {...settings} className="gap-5 s5-slider  p-2  p-md-4 ">
          <div className="px-md-2 px-1">
            <div className="slide-card ">
              <img className="mb-2" src={three} alt="nmbr" />
              <h2 className="fw-normal ff-out black-2 fs-lg lh-25">
                Customer-Centric
              </h2>
              <p className="fs-md pb-0 lh-24 fw-normal ff-exo gray-2">
                Prioritize and anticipate client needs, ensuring our technology
                solutions consistently deliver unparalleled value.
              </p>
            </div>
          </div>
          <div className="px-md-2 px-1">
            <div className="slide-card ">
              <img className="mb-2" src={one} alt="nmbr" />
              <h2 className="fw-normal ff-out black-2 fs-lg lh-25">
                Customer-Centric
              </h2>
              <p className="fs-md pb-0 lh-24 fw-normal ff-exo gray-2">
                Create a nurturing and peaceful environment for our staff,
                fostering growth, well-being, and unity. We are more than a
                team; we are a family.
              </p>
            </div>
          </div>
          <div className="px-md-2 px-1">
            <div className="slide-card ">
              <img className="mb-2" src={two} alt="nmbr" />
              <h2 className="fw-normal ff-out black-2 fs-lg lh-25">
                Customer-Centric
              </h2>
              <p className="fs-md pb-0 lh-24 fw-normal ff-exo gray-2">
                Maintain the highest standards in all practices, ensuring our
                solutions are responsible, safe, and transparent.
              </p>
            </div>
          </div>
        </Slider>
        <img className="w-100   full_img" src={slideimg} alt="full-img" />
      </div>
      <img
        className="position-absolute elip-3 d-none d-md-block ep-img"
        src={elp1}
        alt="ellip"
      />
      <img className="position-absolute elip-4 ep-img" src={elp1} alt="ellip" />
    </div>
  );
};

export default MySlide;
