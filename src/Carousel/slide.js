import React from "react";
import PropTypes from "prop-types";
const Slide = props => {
  const {
    slides,
    activeIndex,
    slideStyle,
    slideContainerStyle,
    onClick
  } = props;
  return (
    <div className="slide" style={slideContainerStyle} onClick={onClick}>
      <img
        alt="slide-img"
        className="carosel-image initial"
        src={slides[activeIndex]}
        style={slideStyle}
      />
    </div>
  );
};

Slide.propTypes = {
  slides: PropTypes.array,
  slideContainerStyle: PropTypes.object,
  slideStyle: PropTypes.object,
  onClick: PropTypes.func,
  activeIndex: PropTypes.number
};

Slide.defaultProps = {
  slides: [],
  slideContainerStyle: {},
  slideStyle: {},
  onClick: () => {},
  activeIndex: 0
};

export default Slide;
