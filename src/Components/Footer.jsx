import React from "react";
import "bootstrap";
import "../App.css";
import { SOCIAL_ICONS } from "../data/Data";
import { PRODUCT_BACKGROUND_COLOR } from "./SingleProduct";

const SingleIcon = ({ icon }) => {
  return (
    <a
      target="_blank"
      href={icon.href}
      className="single_icon rounded-pill mx-2 d-flex justify-content-center align-items-center"
      type="button"
      style={{ backgroundColor: PRODUCT_BACKGROUND_COLOR }}
    >
      {icon.icon}
    </a>
  );
};

const Footer = () => {
  return (
    <div className="container my-5">
      <footer className="py-5">
        <div className="row">
          <div className="col-lg-4 col-sm-7 col-md-6 mb-3 d-flex justify-content-center align-items-start flex-column px-3">
            <h2 className="cookie">Khurrram Clothing</h2>
            <p className="monteserrat fw-light">
              Here you will get all type of clothes of women including clothes
              of different brands in minimum prices
            </p>
          </div>

          <div className="col-lg-2 col-sm-5 col-md-3 mb-3">
            <h5 className="monteserrat fw-bold fs-6 mb-3">QUICK LINKS</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-muted monteserrat fw-light"
                >
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-muted monteserrat fw-light"
                >
                  Blogs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-muted monteserrat fw-light"
                >
                  Contacts
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-muted monteserrat fw-light"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-sm-4 col-md-3 mb-3">
            <h5 className="monteserrat fw-bold fs-6 mb-3">ACCOUNT</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-muted monteserrat fw-light"
                >
                  My Account
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-muted monteserrat fw-light"
                >
                  Orders Tracking
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-muted monteserrat fw-light"
                >
                  Checkout
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className="nav-link p-0 text-muted monteserrat fw-light"
                >
                  WishList
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-sm-8 col-md-8 mb-3">
            <form>
              <h5 className="monteserrat fw-bold fs-6 mb-4">NEWSLETTER</h5>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2 position-relative">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control footer_input px-4 monteserrat fw-light rounded-pill"
                  placeholder="Email"
                  style={{ padding: ".7em" }}
                />
                <button
                  className="btn btn-danger fw-bold rounded-pill footer_button position-absolute end-0 h-100 monteserrat text-uppercase"
                  type="button"
                  style={{
                    width: "40%",
                    backgroundColor: "#ca1515",
                    fontSize: 15,
                  }}
                >
                  Subscribe
                </button>
              </div>
              <div className="d-flex mt-4">
                {SOCIAL_ICONS.map((icon, index) => {
                  return <SingleIcon key={icon.key} icon={icon} />
                })}
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex  flex-column flex-sm-row justify-content-center py-4 my-4 border-top monteserrat">
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved |
            Khurram Clothing
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
