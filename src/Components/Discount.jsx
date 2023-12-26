import React, { useState } from "react";
import "bootstrap";
import discountImage from "../assets/discount.webp";
import "../App.css";
import { PRODUCT_BACKGROUND_COLOR } from "./SingleProduct";

let canvas = document.createElement("canvas");
let c = canvas.getContext("2d");
canvas.width = 550;
canvas.height = 250;
c.beginPath();
c.arc(canvas.width / 2, canvas.height / 2, 80, 0, Math.PI * 2, false);
c.fillStyle = "white";
c.fill();

const Discount = () => {
  const [countdown, setcountdown] = useState({
    days: undefined,
    minutes: undefined,
    hours: undefined,
    seconds: undefined,
  });

  const countDownInterVal = setInterval(() => {
    const targetDate = new Date("December 30, 2023 12:00:00").getTime();

    const currentDate = new Date().getTime();

    const timeDifference = targetDate - currentDate;

    setcountdown({
      days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
      minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
      hours: Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
    });
  }, 1000);

  const {days,minutes,hours,seconds} = countdown;

  function getHours(){
    if(hours < 10){
        return "0" + hours;
    }

    if(hours > 12){
        return hours - 12;
    }
  }

  return (
    <div className="container my-5">
      <div className="row row-cols-md-1 row-cols-lg-2 row-cols-sm-1" style={{ height: 350 }}>
        <div>
          <img
            style={{ width: "100%", height: "100%" }}
            loading="lazy"
            alt="Loading..."
            src={discountImage}
          />
        </div>
        <div
          className="d-flex justify-content-center align-items-center flex-column"
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
          <div className="countdown">
            <div>
              <span className="count_numbers">
                <b>{days < 10 ? "0" + days : days}</b>
              </span>
              <span className="margin_left">Day</span>
            </div>
            <div>
              <span className="count_numbers">
                <b>{getHours()}</b>
              </span>
              <span className="margin_left">Hour</span>
            </div>
            <div>
              <span className="count_numbers">
                <b>{minutes < 10 ? "0" + minutes : minutes}</b>
              </span>
              <span className="margin_left">Min</span>
            </div>
            <div>
              <span className="count_numbers">
                <b>{seconds < 10 ? "0" + seconds : seconds}</b>
              </span>
              <span className="margin_left">Sec</span>
            </div>
          </div>
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

export default Discount;
