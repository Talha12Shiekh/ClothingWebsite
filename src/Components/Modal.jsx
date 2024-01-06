import React from "react";
import "bootstrap";
import { createPortal } from 'react-dom';

const Modal = ({ active, dialogImage,setactive }) => {
  return (
    createPortal(<div id="myModal" role="dialog">
      <div
        role="dialog"
        className={`modal  ${active ? "modal-dialog-centered" : ""}`}
        tabindex="-1"
        style={{backgroundColor: 'rgba(0,0,0,.5)'}}
        onClick={() => setactive(p => !p)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <img src={dialogImage} className="w-100 h-100" alt="Loading..." />
          </div>
        </div>
      </div>
    </div>,document.getElementById("modal"))
  );
};

export default Modal;
