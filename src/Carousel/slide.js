import React from "react";

const Slide = props => {
  const { slides, activeIndex, slideStyle, slideContainerStyle } = props;
  return (
    <div className="slide" style={slideContainerStyle}>
      <img
        alt="slide-img"
        className="carosel-image initial"
        src={slides[activeIndex]}
        style={slideStyle}
      />
    </div>
  );
};

export default Slide;
