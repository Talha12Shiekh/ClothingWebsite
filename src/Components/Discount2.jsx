import React from "react";
import discountImage from "../assets/discount.webp";
import { PRODUCT_BACKGROUND_COLOR } from "./SingleProduct";
import "../App.css";
import Countdown from "react-countdown";

let canvas = document.createElement("canvas");
let c = canvas.getContext("2d");
canvas.width = 550;
canvas.height = 250;
c.beginPath();
c.arc(canvas.width / 2, canvas.height / 2, 80, 0, Math.PI * 2, false);
c.fillStyle = "white";
c.fill();

const TARGET_DISCOUNT_DATE = new Date("January 5, 2024 12:0:00").getTime();

const CountDownTimer = ({ hours, minutes, seconds, days }) => {
  return (
    <div className="countdown">
      <div>
        <span className="fs-2">
          <b>{days < 10 ? "0" + days : days}</b>
        </span>
        <span className="margin_left">Day</span>
      </div>
      <div>
        <span className="fs-2">
          <b>{hours > 12 ? hours - 12 : hours}</b>
        </span>
        <span className="margin_left">Hour</span>
      </div>
      <div>
        <span className="fs-2">
          <b>{minutes < 10 ? "0" + minutes : minutes}</b>
        </span>
        <span className="margin_left">Min</span>
      </div>
      <div>
        <span className="fs-2">
          <b>{seconds < 10 ? "0" + seconds : seconds}</b>
        </span>
        <span className="margin_left">Sec</span>
      </div>
    </div>
  );
};

const CountDownRender = ({ hours, minutes, seconds, completed, days }) => {
  if (!completed) {
    return (
      <CountDownTimer
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        days={days}
      />
    );
  } else {
    return <CountDownTimer hours={0} minutes={0} seconds={0} />;
  }
};

const Discount2 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 p-0 bg-primary">
          <div style={{ height: 400 }}>
            <img loading="lazy" 
              src={discountImage}
              className="w-100 h-100"
              alt="Loading..."
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div
          className="col-lg-6 p-0 d-flex justify-content-center align-items-center flex-column"
          style={{
            backgroundColor: PRODUCT_BACKGROUND_COLOR,
            backgroundImage: `url(${canvas.toDataURL()})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <p
            className="monteserrat text-uppercase mb-0"
            style={{ fontSize: 15 }}
          >
            discount
          </p>
          <h2
            className="cookie my-0"
            style={{ fontSize: "5rem", color: "red" }}
          >
            Winter 2023
          </h2>
          <p className="fs-5 monteserrat fw-bold">
            SALE <b style={{ color: "red" }}>50%</b>
          </p>

          <Countdown date={TARGET_DISCOUNT_DATE} renderer={CountDownRender} />
          <a
            style={{
              textDecoration: "none",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: "bolder",
              marginTop: 30,
            }}
            className="h5 underline item_button text-bold font-weight-bold position-relative"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Discount2;
