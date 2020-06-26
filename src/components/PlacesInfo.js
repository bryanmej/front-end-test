import React from "react";
import "../styles/PlacesInfoStyles.css";
import PlaceCard from "./PlaceCard";

const PlacesInfo = () => {
  return (
    <section>
      <div className="places">
        <b>Coming to visit us? </b>
        <span className="places-text">
          Here are some of our favorite places around town to
        </span>
        <select className="places-dropdown">
          <option> A quiet place to read a book</option>
          <option> Get a cup of coffee</option>
          <option> Go rollerblading </option>
        </select>
      </div>
      <div className="places-data">
        <div className="place-container-mex">
          <small className="place-city">MEXICO CITY:</small>
          <PlaceCard
            city={"mex"}
            title={"Name of Place"}
            address={"123 Main St"}
            description={"amazing burgers, imprompteau jazz trios"}
          />
          <PlaceCard
            city={"mex"}
            title={"Name of Place"}
            address={"123 Main St"}
            description={"amazing burgers, imprompteau jazz trios"}
          />
        </div>
        <div className="place-container-dc">
          <small className="place-city">WASHINGTON D.C.:</small>
          <PlaceCard
            city={"dc"}
            title={"Name of Place"}
            address={"123 Main St"}
            description={"amazing burgers, imprompteau jazz trios"}
          />
          <PlaceCard
            city={"dc"}
            title={"Name of Place"}
            address={"123 Main St"}
            description={"amazing burgers, imprompteau jazz trios"}
          />
        </div>
      </div>
    </section>
  );
};

export default PlacesInfo;
