import React from "react";
import "bootstrap";
import { createPortal } from 'react-dom';
import ThankYouImage from "../assets/thankYou.png";
import "../App.css"

const ThanksModal = ({ active,setactive,message }) => {
  return (
    createPortal(<div id="myModal" role="dialog">
      <div
        role="dialog"
        className={`modal  ${active ? "modal-dialog-centered" : ""}`}
        tabIndex="-1"
        style={{backgroundColor: 'rgba(0,0,0,.5)'}}
        onClick={() => setactive(p => !p)}
      >
        <div className="modal-dialog">
          <div className="modal-content p-3 d-flex justify-content-start align-items-center flex-column">
                <img style={{width:200,height:180}} src={ThankYouImage} alt="Loading..." loading="lazy"/>
                <p className="h1 text-center cookie">{message}</p>
                <button type="button" className="btn monteserrat fw-bold btn-info mt-2 text-uppercase" style={{fontSize:20,width:"80%"}}>Back to site</button>
          </div>
        </div>
      </div>
    </div>,document.getElementById("thanksModal"))
  );
};

export default ThanksModal;
