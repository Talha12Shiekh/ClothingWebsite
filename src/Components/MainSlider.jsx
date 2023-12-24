import React from "react";
import "bootstrap";
import "../App.css";
import Slider1 from "../assets/Slider1.webp";
import Slider2 from "../assets/Slider2.jpg";
import Slider3 from "../assets/Slider3.webp";
import Slider4 from "../assets/Slider4.webp";
import Slider5 from "../assets/Slider5.webp";

const MainSlider = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide my-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Slider1} className="d-block w-100 slider_image" alt="Loading..." />
        </div>
        <div className="carousel-item">
          <img src={Slider2} className="d-block w-100 slider_image" alt="Loading..." />
        </div>
        <div className="carousel-item">
          <img src={Slider3} className="d-block w-100 slider_image" alt="Loading..." />
        </div>
        <div className="carousel-item">
          <img src={Slider4} className="d-block w-100 slider_image" alt="Loading..." />
        </div>
        <div className="carousel-item">
          <img src={Slider5} className="d-block w-100 slider_image" alt="Loading..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MainSlider;
