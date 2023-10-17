import React, { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";
import data from "./data";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn l_flex" onClick={onClick}>
      <button className="next l_flex">
        <KeyboardArrowRightIcon className="icon" />
      </button>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn l_flex" onClick={onClick}>
      <button className="prev l_flex">
        <KeyboardArrowLeftIcon className="icon" />
      </button>
    </div>
  );
};
function Trending() {
  const { regions } = data;

  //===========
  //REACT SLICK
  //===========
  const [slidesToShow, setSlidesToShow] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setSlidesToShow(Math.min(3, regions.length));
      } else if (screenWidth >= 992) {
        setSlidesToShow(Math.min(2, regions.length));
      } else {
        setSlidesToShow(Math.min(1, regions.length));
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [regions.length]);

  const SliderSettings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="trending slider">
      <div className="header">
        <h2>Trending Destinations</h2>
      </div>
      <div className="list">
        <Slider {...SliderSettings}>
          {regions.map((region, index) => (
            <TrendingCard key={index} region={region} index={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Trending;
