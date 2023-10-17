import React from "react";
import "./styles.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SideBar from "../side bar/SideBar";

function Navigation() {
  return (
    <div className="navigation">
      <div className="content f_flex">
        <div className="search_box a_flex">
          <SearchOutlinedIcon className="icon" />
          <input type="search" placeholder="Search any thing..." />
        </div>
        <div className="date_alarm_menu a_flex">
          <div className="date">
            <h4>Saturday, may 3, 2023</h4>
          </div>
          <div className="alarm_badge ">
            <span className="badge h_flex">
              <small>3</small>
            </span>
            <span className="alarm h_flex">
              <NotificationsOutlinedIcon className="icon" />
            </span>
          </div>
          <div className="menu">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
