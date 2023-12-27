import React,{useState} from "react";
import "bootstrap";
import logo from "../assets/logo.webp";
import {LIST_ITEMS} from "../data/Data";
import "../App.css";


const ListItem = ({list,index,active,setactive}) => {
    return <li className={`nav-item mx-2 text-center navbar_item ${active == index ? "active" : ""}`} 
    onMouseOver={() => setactive(index)}
    // onMouseLeave={() => setactive(false)}
    >
    <a className="nav-link active" aria-current="page" href="#">{list}</a>
  </li>
}

const BootNavbar = () => {
  const [active,setactive] = useState(0);

    
   return  <nav className="navbar navbar-expand-lg bg-light-subtle p-4">
   <div className="container-fluid d-flex align-items-center">
      <h3 className="cookie h1">Khurram Clothing</h3>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">         
       </ul>
       <form className="d-flex" role="search">
       <ul className="navbar-nav d-flex justify-content-center mx-auto me-auto mb-2 mb-lg-0">
        {LIST_ITEMS.map((list,index) => {
            return  <ListItem active={active} setactive={setactive} index={index} key={list} list={list}/>
        })}
         </ul>
       </form>
     </div>
   </div>
 </nav>
}

export default BootNavbar;