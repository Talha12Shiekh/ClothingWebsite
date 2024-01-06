import React, { useState } from "react";
import "bootstrap";
import { PORTFOLIO_IMAGES } from "../data/Data";
import "../App.css";

const HoverCard = ({ isHovered,showDialog }) => {
  return (
    <div
      className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center flex-column"
      style={{
        cursor: "pointer",
        opacity: isHovered ? 1 : 0,
        transition: "all 0.52s linear",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
        ></path>
      </svg>
      <p className="fw-bold monteserrat mt-3">@ tlha_shkh</p>
    </div>
  );
};

const SingleImage = ({ image }) => {
  const [isHovered, setisHovered] = useState(false);
  return (
    <>
      <div
        style={{
          height: 300,
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          position: "relative",
          marginInline:"auto",
        }}
        onMouseOver={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
        onClick={() => location.href = "https://www.instagram.com/tlha_shkh/"}
      >
        <HoverCard isHovered={isHovered} />
      </div>
    </>
  );
};

const Portfolio = () => {
  return (
    <div style={{overflowX:"hidden"}} className="row row-cols-1 row-cols-lg-6 row-cols-md-3 mx-auto my-5" >
      {
        PORTFOLIO_IMAGES.map(image => <SingleImage key={image} image={image} />)
      }
    </div>
  );
};

export default Portfolio;
