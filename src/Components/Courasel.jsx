import React from "react";
import "bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "../App.css";
import {PRODUCT_BACKGROUND_COLOR} from "./SingleProduct";
import product8 from "../assets/backgroundBaner.webp";

const SingleSlide = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column" style={{height:500,
            backgroundImage: `url(${product8})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            backgroundPosition:"center",
        }}>
            <p className="h5 text-uppercase monteserrat fw-light text-danger">The Clothes collection</p>
            <h1 className="h1 cookie" style={{fontSize:"6rem"}}>The Perfect Clothe</h1>
            <a style={{textDecoration:"none",cursor:"pointer",fontSize:14,fontWeight:"bolder"}} className="h5 underline item_button text-bold font-weight-bold position-relative my-2">SHOP NOW</a>
        </div>
    )
}

const Courasel = () => {
  return (
    <div className="my-5">
    <Swiper 
    style={{
        "--swiper-pagination-color": "red",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "13px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
    pagination={{
        clickable: true,
      }} modules={[Pagination]} className="mySwiper" loop={true}>
        <SwiperSlide>
            <SingleSlide/>
        </SwiperSlide>
        <SwiperSlide>
        <SingleSlide/>
        </SwiperSlide>
        <SwiperSlide>
        <SingleSlide/>
        </SwiperSlide>
      </Swiper>
      </div>
  );
};

export default Courasel;
