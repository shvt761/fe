import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
// "https://wallpaperaccess.com/full/2026595.jpg",
"https://images.hdqwalls.com/download/anime-scenery-sunset-4k-xp-2560x1080.jpg",
"https://images.hdqwalls.com/download/anime-landscape-d5-2560x1080.jpg",
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  indicators: false,
  arrows: true,
}

function Carousel() {
  return (
    <div className="mb-4 ml-4 mr-4 mt-4 border-2 ">
      <Fade {...fadeProperties}>
      {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
      }
      </Fade>
    </div>
  );
}

export default Carousel