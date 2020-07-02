import React, { useState } from "react";
import "../styles/ContactFormStyles.css";
import bulletOne from "../assets/bullet_1.png";
import bulletTwo from "../assets/bullet_2.png";
import bulletThree from "../assets/bullet_3.png";
import Input from "./Input";
import PlacesInfo from "./PlacesInfo";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [valid, setValid] = useState({
    valName: "",
    valLastName: "",
    valEmail: "",
    valPhone: "",
  });

  const handleNameInput = (e) => {
    e.persist();
    setForm((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const handleLastNameInput = (e) => {
    e.persist();
    setForm((prevState) => ({
      ...prevState,
      lastName: e.target.value,
    }));
  };

  const handleEmailInput = (e) => {
    e.persist();
    setForm((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  const handlePhoneInput = (e) => {
    e.persist();
    setForm((prevState) => ({
      ...prevState,
      phone: e.target.value,
    }));
  };

  const handleCommentInput = (e) => {
    e.persist();
    setForm((prevState) => ({
      ...prevState,
      comment: e.target.value,
    }));
  };

  const formData = () => {
    let fullName = `${form.name} ${form.lastName}`;
    let data = new FormData();
    data.append("fullname", fullName);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("comment", form.comment);
    return data;
  };

  const submitForm = async () => {
    const url =
      "https://cors-anywhere.herokuapp.com/http://ingenia.com/snippets/test/contact.php";
    let sendData = await fetch(url, {
      method: "POST",
      body: formData(),
    });
    return sendData;
  };

  const validateName = () => {
    if (form.name.length === 0) {
      setValid((prev) => ({
        ...prev,
        valName: "*Please fill out name field",
      }));
      return false;
    } else {
      setValid((prev) => ({
        ...prev,
        valName: "",
      }));
      return true;
    }
  };

  const validateLastName = () => {
    if (form.lastName.length === 0) {
      setValid((prev) => ({
        ...prev,
        valLastName: "*Please fill out last name field",
      }));
      return false;
    } else {
      setValid((prev) => ({
        ...prev,
        valLastName: "",
      }));
      return true;
    }
  };

  const validateEmail = () => {
    if (form.email.length === 0) {
      setValid((prev) => ({
        ...prev,
        valEmail: "*Please fill out an e-mail address",
      }));
      return false;
    } else {
      setValid((prev) => ({
        ...prev,
        valEmail: "",
      }));
      return true;
    }
  };

  const validatePhone = () => {
    if (form.phone.length === 0) {
      setValid((prev) => ({
        ...prev,
        valPhone: "*Please fill out a phone number",
      }));
      return false;
    } else {
      setValid((prev) => ({
        ...prev,
        valPhone: "",
      }));
      return true;
    }
  };

  const handleSubmit = () => {
    if (
      validateName() &&
      validateLastName() &&
      validateEmail() &&
      validatePhone()
    )
      submitForm()
        .then((res) => res.text())
        .then((res) => {
          let obj = JSON.parse(res);
          alert(obj.Message);
        });
  };

  return (
    <section className="contact-container">
      <small className="required">*REQUIRED FIELD</small>
      <div className="input-container">
        <img src={bulletOne} className="bullet" alt="bullet one" />
        <Input
          type={"text"}
          placeholder={"Name"}
          inputHandler={handleNameInput}
        />

        <Input
          type={"text"}
          placeholder={"Last Name"}
          inputHandler={handleLastNameInput}
        />
      </div>
      <div className="input-container">
        <img src={bulletTwo} className="bullet" alt="bullet one" />
        <Input
          type={"text"}
          placeholder={"E-mail"}
          inputHandler={handleEmailInput}
        />
        <Input
          type={"text"}
          placeholder={"Phone"}
          inputHandler={handlePhoneInput}
        />
      </div>
      <div className="input-container textarea">
        <span className="contact-label">
          <img src={bulletThree} className="bullet" alt="bullet three" />
          Tell us about your challenge or opportunity
        </span>
        <Input type={"textarea"} inputHandler={handleCommentInput} />
        {valid.valName.length !== 0 ? (
          <div className="error-msg">{valid.valName}</div>
        ) : null}
        {valid.valLastName.length !== 0 ? (
          <div className="error-msg">{valid.valLastName}</div>
        ) : null}
        {valid.valEmail.length !== 0 ? (
          <div className="error-msg">{valid.valEmail}</div>
        ) : null}
        {valid.valPhone.length !== 0 ? (
          <div className="error-msg">{valid.valPhone}</div>
        ) : null}
        <button className="submit-btn" onClick={handleSubmit}>
          SEND
        </button>
      </div>
      <PlacesInfo />
    </section>
  );
};

export default ContactForm;
