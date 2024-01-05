import React from "react";
import "bootstrap";

const Modal = ({ active, dialogImage }) => {
  return (
    <div id="myModal" role="dialog">
      <div
        role="dialog"
        className={`modal  ${active ? "modal-dialog-centered" : ""}`}
        tabindex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ width: 500, height: 500 }}>
            <img src={dialogImage} className="w-100 h-100" alt="Loading..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
