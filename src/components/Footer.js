import React from "react";
import "../styles/FooterStyles.css";
import FootNav from "./FootNav";
import FootAddress from "./FootAddress";
import socialMedia from "../assets/social_media.png";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="foot-div">
        <h6 className="copy-right">© 2014 Ingenia Group</h6>
        <div className="foot-addr-div">
          <div className="usa-addr">
            <FootAddress
              country="usa"
              address={
                "1200 18TH STREET, NW Suite 700 Washington DC 20036 USA."
              }
              phone={"50220900"}
            />
          </div>
          <div className="mex-addr">
            <FootAddress
              country="mex"
              address={
                "ANATOLE FRANCE 311 Polanco, Miguel Hidalgo 11560 México D.F."
              }
              phone={"50220900"}
            />
          </div>
        </div>
      </div>
      <div className="foot-div">
        <FootNav />
        <div className="tnc">
          <a href="#terms" className="footer-tnc terms">
            Terms of Use
          </a>
          <a href="#policy" className="footer-tnc policy">
            Privacy Policy
          </a>
        </div>
        <a href="#social" className="social-media">
          <img src={socialMedia} alt="social media" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
