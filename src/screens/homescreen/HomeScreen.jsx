import React from "react";
import SideMenu from "../../common/side menu/SideMenu";
import Navigation from "../../common/nav/Navigation";
import "./styles.scss";
import Banner from "../../components/home/banner/Banner";
import Trending from "../../components/home/trending/Trending";
import Offers from "../../components/home/offers/Offers";
import Explore from "../../components/home/explore/Explore";

function HomeScreen() {
  return (
    <>
      <div className="d_flex ">
        <span className="sideBar">
          <SideMenu />
        </span>
        <span className="dashboard">
          <Navigation />
          <Banner />
          <Trending />
          <Offers />
          <Explore />
        </span>
      </div>
    </>
  );
}

export default HomeScreen;
