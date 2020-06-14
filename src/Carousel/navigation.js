import React from "react";
import PropTypes from "prop-types";
const Navigation = props => {
  const { goToNextSlide, goToPrevSlide } = props;
  return (
    <>
      <button className="slide-btn btn-next" onClick={goToNextSlide}>
        <img src="../images/right-chevron.svg" />
      </button>
      <button className="slide-btn btn-prev" onClick={goToPrevSlide}>
        <img src="../images/button.svg" />
      </button>
    </>
  );
};
Navigation.propTypes = {
  goToNextSlide: PropTypes.func,
  goToPrevSlide: PropTypes.func
};

Navigation.defaultProps = {
  goToNextSlide: () => {},
  goToPrevSlide: () => {}
};

export default Navigation;
