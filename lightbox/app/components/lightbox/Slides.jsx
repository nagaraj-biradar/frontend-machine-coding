import React from "react";

const Slides = ({ image_url, caption, active }) => {
  return (
    <div className="image-slide">
      <img src={image_url} alt={caption} className={active ? "active" : ""} />
    </div>
  );
};

export default Slides;
