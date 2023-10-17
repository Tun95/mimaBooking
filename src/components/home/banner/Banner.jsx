import React from "react";
import banner from "../../../assets/banner.jpg";
import { DatePicker, Select } from "antd";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";

function Banner() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="banner ">
      <div className="content">
        <div className="img">
          <img src={banner} alt="" />
        </div>
        <div className="filter h_flex">
          <div className="box f_flex box_shadow">
            <div className="select f_flex">
              <div className="location a_flex">
                <FmdGoodOutlinedIcon className="icon" />
                <Select
                  showSearch
                  placeholder="Where Are You Going?"
                  optionFilterProp="children"
                  className="select_search"
                  bordered={false}
                  options={[
                    {
                      value: "London",
                      label: "London",
                    },
                    {
                      value: "Paris",
                      label: "Paris",
                    },
                    {
                      value: "Istanbul",
                      label: "Istanbul",
                    },
                  ]}
                />
              </div>
              <div className="date a_flex">
                <EventNoteOutlinedIcon className="icon"/>
                <DatePicker
                  placeholder="Check-in date"
                  onChange={onChange}
                  className="date_picker"
                />
              </div>
              <div className="user a_flex">
                <PersonOutlineOutlinedIcon className="icon" />
                <Select
                  showSearch
                  placeholder="User"
                  optionFilterProp="children"
                  className="select_search"
                  bordered={false}
                  options={[
                    {
                      value: "3 adult",
                      label: "3 adult",
                    },
                    {
                      value: "2 children",
                      label: "2 children",
                    },
                    {
                      value: "5 grandad",
                      label: "5 grandad",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="btn">
              <button className="box_shadow">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
