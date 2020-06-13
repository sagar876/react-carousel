import React from "react";

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
export default Navigation;
