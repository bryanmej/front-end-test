import React from "react";
import burgerIcon from "../assets/burger_icon.png";
import "../styles/PlaceCardStyles.css";

const PlaceCard = ({ city, title, address, description }) => {
  return (
    <div className={city === "mex" ? "mex-place" : "dc-place"}>
      {city === "mex" ? (
        <div className="place-div">
          <h4 className="place-title">{title}</h4>
          <img src={burgerIcon} alt="burger icon" />
        </div>
      ) : (
        <div className="place-div">
          <img src={burgerIcon} alt="burger icon" />
          <h4 className="place-title left">{title}</h4>
        </div>
      )}
      <p className="place-address">{address}</p>
      <p className="place-description">{description}</p>
    </div>
  );
};

export default PlaceCard;
