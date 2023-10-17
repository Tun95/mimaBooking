import React from "react";
import { Link } from "react-router-dom";

function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
function ExploreCard({ index, region }) {
  return (
    <div className="slider_card" key={index}>
      <div className="content d_flex">
        <div className="img">
          <Link to="">
            <img src={region.img} alt={region.name} />
          </Link>
        </div>
        <div className="main_content">
          <div className="name_rating">
            <div className="name">
              <Link to="">
                <h3>{region.name}</h3>
              </Link>
            </div>
          </div>
          <div className="desc">
            <p>{region.description}</p>
          </div>
          <div className="price">
            <h4>{formatPrice(region.price)}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCard;
