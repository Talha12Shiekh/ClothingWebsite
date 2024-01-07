import React,{useState,useEffect} from "react";
import "bootstrap";
import "../App.css";
import { CONTACT_INFO_DATA } from "../data/Data";
import { useForm, ValidationError } from "@formspree/react";
import ThanksModal from "./ThanksModal"

const SingleContactInfo = ({ heading, description, icon }) => {
  return (
    <div className="my-4">
      <div className="d-flex">
        {icon}
        <h6 className="monteserrat fw-bold mx-2">{heading}</h6>
      </div>
      <p className="monteserrat">{description}</p>
    </div>
  );
};

const Contacts = () => {
  const [state, handleSubmit] = useForm("xvoeoyee");

  const message = <p>Thank you for signing in ! Your response has been submitted</p>

  const [active,setactive] = useState(false)

  useEffect(() => {
    if (state.succeeded) {
      setactive(true) 
    }else {
      setactive(false) 
    }
  },[state.succeeded])
  

  return (
    <>
    {active && <ThanksModal active={active} setactive={setactive} message={message}/>}
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-12">
          <h5 className="monteserrat fw-bold">CONTACT INFO</h5>
          <div className="my-3">
            {CONTACT_INFO_DATA.map(({ heading, description, icon, key }) => {
              return (
                <SingleContactInfo
                  key={key}
                  heading={heading}
                  description={description}
                  icon={icon}
                />
              );
            })}
          </div>
          <form onSubmit={handleSubmit} className="my-5">
            <h5 className="monteserrat fw-bold">SEND MESSAGE</h5>
            <input
              required
              id="name"
              type="text"
              name="name"
              className="form-control mt-4 p-3 monteserrat"
              placeholder="Name"
              aria-label="Username"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              required
              type="email"
              id="email"
              name="email"
              className="form-control mt-4 p-3 monteserrat"
              placeholder="Email"
              aria-label="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input
              type="text"
              className="form-control mt-4 p-3 monteserrat"
              placeholder="Website"
              aria-label="Website"
            />
            <textarea
              id="message"
              name="message"
              className="form-control mt-4 monteserrat p-3"
              aria-label="With textarea"
              placeholder="Message"
              style={{ height: 140, resize: "none" }}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="btn btn-danger fw-bold rounded-pill footer_button monteserrat text-uppercase mt-4 px-4 py-2"
              type="submit"
              style={{ backgroundColor: "#ca1515", fontSize: 14 }}
              disabled={state.submitting}
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="col-md-6 col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27225.328237875936!2d74.25636258697475!3d31.46461865700412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015f82b0b86f%3A0x2fcaf9fdeb3d02e6!2sJohar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1704368754953!5m2!1sen!2s"
            height="800"
            style={{ border: 0, width: "100%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contacts;
