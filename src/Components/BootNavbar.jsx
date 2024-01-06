import React, { useState } from "react";
import "bootstrap";
import { LIST_ITEMS } from "../data/Data";
import "../App.css";
import { Link, useLoaderData } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const ListItem = ({ list }) => {
  const location = useLocation();
  return (
    <li
      className={`nav-item mx-2 text-center navbar_item ${
        location.pathname == list.path ? "active" : ""
      }`}
    >
      <Link className="nav-link active" aria-current="page" to={list.path}>
        {list.item}
      </Link>
    </li>
  );
};

const BootNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light-subtle p-4">
      <div className="container-fluid d-flex align-items-center">
        <h3 className="cookie h1">Khurram Clothing</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse`} id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex" role="search">
            <ul className="navbar-nav d-flex justify-content-center mx-auto me-auto mb-2 mb-lg-0">
              {LIST_ITEMS.map((list) => {
                return (
                  <ListItem
                    key={list.key}
                    list={list}
                  />
                )
              })}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default BootNavbar;
