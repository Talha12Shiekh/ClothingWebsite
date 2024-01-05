import React from "react";
import "bootstrap";
import "../App.css";
import AppearingBalls from "./AppearingBalls";
import { BALLS_DATA } from "../data/Data";
import {motion} from "framer-motion"
import Modal from "./Modal";


export const PRODUCT_BACKGROUND_COLOR = "#eaece9";

const SingleProduct = ({ name, price, image,setshowDialog,setDialogImage }) => {
  return (
    <>
      <motion.div
        layout
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        className="card col-11 col-md-5 col-lg-3 my-3 border-0 position-relative  overflow-hidden"
      >
        <div className="appearing_balls d-flex position-absolute ">
          {BALLS_DATA.map(({key,icon}, index) => {
            return ( <AppearingBalls setDialogImage={setDialogImage} setshowDialog={setshowDialog} key={key} image={image} index={index}  icon={icon} />
            )
          })}
        </div>

        <img loading="lazy" 
          src={image}
          style={{
            backgroundColor: PRODUCT_BACKGROUND_COLOR,
            height: 350,
            objectFit: "cover",
          }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text text-center monteserrat mb-0">{name}</p>
          <div className="text-center mb-2">
            {Array(5)
              .fill("")
              .map((s) => {
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="orange"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                );
              })}
          </div>
          <p className="card-text text-center monteserrat">
            <b>$ {price}</b>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default SingleProduct;
