import React from "react";
import "bootstrap";
import lady from "../assets/cloth.png";
import {CARD_ITEMS_ARRAY} from "../data/Data";
import "../App.css";
import SIngleCardItem from "./SIngleCardItem";
const FIRST_IMAGE_BACKGROUND= "#fae3d9";

const MainContent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="border border-4 border-white col-12 col-lg-6 mx-auto my-3 d-flex justify-content-center flex-column"
          style={{
            backgroundColor: FIRST_IMAGE_BACKGROUND,
            backgroundImage: `url(${lady})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: 580,
            backgroundPositionY: '1rem',
            backgroundPositionX: '20rem',
            backgroundAttachment:"fixed"
          }}
        >
          <h2 className="mx-4 fashion_heading">Women’s fashion</h2>
          <p className="mx-4 my-4 fashion_description">
            Here you will get all type of clothes of women including clothes of different brands in minimum prices
          </p>
        <a style={{textDecoration:"none",cursor:"pointer",fontWeight:"bolder",width:100}} className="mx-4 h6 underline text-bold font-weight-bold position-relative">SHOP NOW</a>
        </div>
        <div className="col-12 col-lg-6 mx-auto my-3">
          <div className="row row-cols-sm-2 d-flex row-cols-1 justify-content-center align-items-center">
              {
                CARD_ITEMS_ARRAY.map((item,index) => {
                  return <SIngleCardItem
                  key={item.heading}
                  item={item}
                  index={index}
                  />
                })
              }
            </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
