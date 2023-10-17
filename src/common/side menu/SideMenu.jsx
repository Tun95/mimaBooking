import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeIcon from "@mui/icons-material/Home";
import user from "../../assets/user.jpeg";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

function SideMenu() {
  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="side_menu flex_1">
      <div className="side_menu_content ">
        <div className="logo_menu_list p_flex">
          <div className="logo h_flex">
            <h2>
              <span>Mima</span>Booking
            </h2>
          </div>
          <div className="user_menu">
            <div className="user_img">
              <img src={image || user} alt="" />
            </div>
            <div className="icon h_flex">
              <label htmlFor="image">
                <i className="fa-solid fa-pen-to-square"></i>
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="image"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <div className="name">
              <p>ilia jan</p>
            </div>
          </div>
          <div className="menu_list">
            <ul>
              <li>
                <Link to="" className="a_flex">
                  <HomeIcon className="icon" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="" className="a_flex">
                  <GridViewIcon className="icon" />
                  <span>Explore City</span>
                </Link>
              </li>
              <li>
                <Link to="" className="a_flex">
                  <AirplaneTicketOutlinedIcon className="icon" />
                  <span>Ticket</span>
                </Link>
              </li>
              <li>
                <Link to="" className="a_flex">
                  <FavoriteBorderOutlinedIcon className="icon" />
                  <span>Favorites</span>
                </Link>
              </li>
              <li>
                <Link to="" className="a_flex">
                  <SettingsOutlinedIcon className="icon" />
                  <span>Setting</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="log_height ">
          <div className="log ">
            <div className="logout a_flex">
              <KeyboardArrowRightOutlinedIcon className="icon" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
