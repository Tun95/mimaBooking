import React from "react";
import OfferCard from "./OfferCard";

function Offers() {
  return (
    <div className="offers">
      <div className="header">
        <h2>Best Offers</h2>
      </div>
      <div className="offer_list">
        <OfferCard />
      </div>
    </div>
  );
}

export default Offers;
