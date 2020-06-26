import React from "react";
import "../styles/ContactForm.css";
import bulletOne from "../assets/bullet_1.png";
import bulletTwo from "../assets/bullet_2.png";
import bulletThree from "../assets/bullet_3.png";
import Input from "./Input";
import PlacesInfo from "./PlacesInfo";

const ContactForm = () => {
  return (
    <section className="contact-container">
      <small className="required">*REQUIRED FIELD</small>
      <div className="input-container">
        <img src={bulletOne} className="bullet" alt="bullet one" />
        <Input type={"text"} placeholder={"Name"} />
        <Input type={"text"} placeholder={"Last Name"} />
      </div>
      <div className="input-container">
        <img src={bulletTwo} className="bullet" alt="bullet one" />
        <Input type={"text"} placeholder={"E-mail"} />
        <Input type={"text"} placeholder={"Phone"} />
      </div>
      <div className="input-container textarea">
        <span className="contact-label">
          <img src={bulletThree} className="bullet" alt="bullet three" />
          Tell us about your challenge or opportunity
        </span>
        <Input type={"textarea"} />
        <button className="submit-btn">SEND</button>
      </div>
      <PlacesInfo />
    </section>
  );
};

export default ContactForm;
