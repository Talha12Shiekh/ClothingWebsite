import React from "react";
import { FidgetSpinner } from "react-loader-spinner";

const FallBack = () => {
  return (
    <div style={{height:"100vh"}} className="d-flex justify-content-center align-items-center">
    <FidgetSpinner
      visible={true}
      height="150"
      width="150"
      ariaLabel="fidget-spinner-loading"
      wrapperStyle={{}}
      wrapperClass="fidget-spinner-wrapper"
      backgroundColor="black"
    />
    </div>
  );
};

export default FallBack;
