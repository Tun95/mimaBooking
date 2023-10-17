import React from "react";
import data from "./data";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
function OfferCard() {
  const { rooms } = data;
  return (
    <div className="offer_card">
      <div className="content">
        {rooms.map((item, index) => (
          <div className="cards" key={index}>
            <div className="img">
              <Link to="">
                <img src={item.img} alt="" />
              </Link>
            </div>
            <div className="text">
              <div className="name">
                <Link to="">
                  <h4>{item.name}</h4>
                </Link>
              </div>
              <div className="location">
                <small>{item.location}</small>
              </div>
              <div className="price_btn f_flex">
                <div className="price a_flex">
                  <span>{formatPrice(item.price)} </span>
                  <small>&#160; / night</small>
                </div>
                <div className="btn h_flex">
                  <button>
                    <FavoriteBorderOutlinedIcon className="icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferCard;
