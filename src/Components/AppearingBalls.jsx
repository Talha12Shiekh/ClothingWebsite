import React from "react";
import "../App.css";
import "bootstrap";

const AppearingBalls = ({ icon, index, setshowDialog,setDialogImage,image }) => {
  const transitionDelay = `${index * 0.1}s`;
  return (
    <div
      role="button"
      className="single_ball position-absolute bg-white d-flex justify-content-center align-items-center"
      style={{ left: index * 90, transitionDelay }}
      onClick={() => {
        if (index == 0) {
          setshowDialog((p) => !p);
          setDialogImage(image)
        }
      }}
    >
      {icon}
    </div>
  );
};

export default AppearingBalls;
