import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import data from "../trending/data";
import ExploreCard from "./ExploreCard";

function Explore() {
  const { franceData } = data;

  //===========
  //REACT SLICK
  //===========
  const [slidesToShow, setSlidesToShow] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setSlidesToShow(Math.min(3, franceData.length));
      } else if (screenWidth >= 992) {
        setSlidesToShow(Math.min(2, franceData.length));
      } else {
        setSlidesToShow(Math.min(1, franceData.length));
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [franceData.length]);

  const SliderSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <div className="explore slider">
      <div className="header">
        <h2>Explore France</h2>
      </div>
      <div className="list">
        <Slider {...SliderSettings}>
          {franceData.map((region, index) => (
            <ExploreCard key={index} region={region} index={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Explore;
