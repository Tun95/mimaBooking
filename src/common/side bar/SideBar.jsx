import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from "@mui/icons-material/GridView";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import user from "../../assets/user.jpeg";

function SideBar() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // =============
  // IMAGE HANDLER
  // =============
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

  const webItemList = [
    {
      text: <span className="drawer_list">Dashboard</span>,
      icon: <HomeIcon className="drawer_icon" />,
      to: "",
    },
    {
      text: <span className="drawer_list">Explore City</span>,
      icon: <GridViewIcon className="drawer_icon" />,
      to: "",
    },
    {
      text: <span className="drawer_list">Ticket</span>,
      icon: <AirplaneTicketOutlinedIcon className="drawer_icon" />,
      to: "",
    },
    {
      text: <span className="drawer_list">Favorites</span>,
      icon: <FavoriteBorderOutlinedIcon className="drawer_icon" />,
      to: "",
    },
    {
      text: <span className="drawer_list">Setting</span>,
      icon: <SettingsOutlinedIcon className="drawer_icon" />,
      to: "",
    },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {webItemList.map((item, index) => {
          const { text, icon } = item;
          return (
            <ListItem key={index} disablePadding component={Link} to={item.to}>
              <ListItemButton>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} className="listItemText" />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
  return (
    <div className="drawer_menu">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className="drawer_btn_icon"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon className="menu_icon" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className="drawer"
          >
            <div className="logo h_flex">
              <h2>
                <span>Mima</span>Booking
              </h2>
            </div>
            <div className="user_menu">
              <div className="user_img h_flex">
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
            <span className="drawer_list_span">{list(anchor)}</span>

            <div className="log_height ">
              <div className="log ">
                <Divider />
                <div className="logout a_flex">
                  <KeyboardArrowRightOutlinedIcon className="icon" />
                  <span>Logout</span>
                </div>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SideBar;
