import React from "react";
import "../styles/MainPageStyles.css";
import AddressBox from "./AddressBox";

const MainPage = () => {
  return (
    <main className="main-page">
      <div className="mex container">
        <div className="address-container">
          <h1 className="city">Mexico City</h1>
          <AddressBox
            street={"ANATOLE FRANCE 311"}
            area={"Polanco, Miguel Hidalgo 11560 México D.F."}
            phone={"50 22 09 00"}
          />
        </div>
      </div>
      <div className="dc container">
        <div className="address-container">
          <h1 className="city">Washington D.C.</h1>
          <AddressBox
            street={"1200 18TH STREET, NW"}
            area={"Suite 700 Washington DC 20036 USA."}
            phone={"50 22 09 00"}
          />
        </div>
      </div>
      <div className="contact-us">
        <p className="sub-contact">
          Ingenia is located in two major business & government hubs in the
          Americas
        </p>
        <h2 className="contact-text">Contact Us</h2>
        <p className="sub-contact">
          Send us an e-mail and we will get back to you
        </p>
      </div>
    </main>
  );
};

export default MainPage;
