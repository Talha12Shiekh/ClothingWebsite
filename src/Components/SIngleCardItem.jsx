import React from "react";
import "bootstrap";
import "../App.css"

const SIngleCardItem = ({item,index}) => {
  return (
    <>
    <div
      className="px-4 border border-4 border-white d-flex flex-column justify-content-center align-items-start"
      style={{ height:290, backgroundColor: `${item.backgroundColor}` ,
      backgroundImage: `url(${item.image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize:"cover",
      backgroundPositionX:(index == 1 || index == 0) ? "8rem" : 
      "5rem",
    }}
    >
      <h4 className="card_heading">
        {item.heading}
      </h4>
     <p >
        {item.text}
     </p>
    <a style={{textDecoration:"none",cursor:"pointer",fontSize:14,fontWeight:"bolder"}} className="h5 underline item_button text-bold font-weight-bold position-relative my-2">SHOP NOW</a>
    </div>
    {index == 1 && <div className="w-100"></div>}
    </>
  );
};

export default SIngleCardItem;
