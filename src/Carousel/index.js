import React, { Component } from "react";
import Slide from "./slide";
import Navigation from "./navigation";
import Modal from "./modal";
const slideStyle = {
  height: "100%",
  width: "100%",
  transition: "background-image 0.3s ease-in-out",
  maxHeight: "500px",
  objectFit: "contain"
};
const slideContainerStyle = {
  minHeight: 400
};
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      activeIndex: 0,
      isModalOpen: false
    };
    this.goToNextSlide = this.debounce(this.goToNextSlide.bind(this), 500);
    this.goToPrevSlide = this.debounce(this.goToPrevSlide.bind(this), 500);
  }

  debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      const context = this;
      const newArgs = args;
      const later = function() {
        timeout = null;
        func.apply(context, newArgs);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, delay);
    };
  };

  componentDidMount() {
    this.setState({
      slides: this.props.images
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        slides: nextProps.images
      });
    }
  }

  goToPrevSlide = () => {
    const { activeIndex } = this.state;
    const isLastSlide = activeIndex === 0;
    const index = isLastSlide ? this.getLastImgIndex() : activeIndex - 1;
    this.setState({
      activeIndex: index
    });
  };

  goToNextSlide = () => {
    const { activeIndex } = this.state;
    const isLastSlide = activeIndex === this.getLastImgIndex();
    const index = isLastSlide ? 0 : activeIndex + 1;

    this.setState({
      activeIndex: index
    });
  };

  getLastImgIndex = () => {
    return this.state.slides.length - 1;
  };

  onModalOpen = url => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      imagePreviewUrl: url
    });
  };

  onModalClose = () => {
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    const { slides, activeIndex, isModalOpen } = this.state;
    return (
      <div className="carousel-container">
        <Slide
          slides={slides}
          activeIndex={activeIndex}
          slideStyle={slideStyle}
          slideContainerStyle={slideContainerStyle}
          onClick={this.onModalOpen}
        />
        <Navigation
          goToNextSlide={this.goToNextSlide}
          goToPrevSlide={this.goToPrevSlide}
        />
        {isModalOpen && (
          <Modal
            imagePreviewUrl={slides[activeIndex]}
            onModalClose={this.onModalClose}
          />
        )}
      </div>
    );
  }
}
