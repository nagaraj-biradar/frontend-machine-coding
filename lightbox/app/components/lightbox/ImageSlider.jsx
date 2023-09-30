import React from "react";
import Slides from "./Slides";

const ImageSlider = ({ images, active, onNext, onPrev }) => {
  return (
    <div className="image-slider -wrapper">
      <div className="image-slide">
        {images.map((image, i) => (
          <Slides {...image} key={image.caption} active={i === active} />
        ))}
      </div>
      <div className="image-silder-navigation">
        <span className="image-navigation next" onClick={onNext}>
          &gt;
        </span>
        <span className="image-navigation prev" onClick={onPrev}>
          &lt;
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
