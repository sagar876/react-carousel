import React, { Component } from "react";
import Carousel from "./Carousel";
import FileUploader from "./fileUploader";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrlList: [
        "https://i.insider.com/5c6ef4f52628982b9e0d5742?width=750&format=jpeg&auto=webp",
        "https://sites.google.com/site/thisisjustatest2294/_/rsrc/1468742544208/project-resources/image-search/google-image-search/Screen%20Shot%202015-11-28%20at%201.14.27%20PM.png"
      ]
    };
  }

  handleImageUpload = uploadedImages => {
    this.setState({
      imageUrlList: [...this.state.imageUrlList, ...uploadedImages]
    });
  };

  render() {
    return (
      <div>
        <Carousel images={this.state.imageUrlList} />
        <FileUploader
          handleImageUpload={images => this.handleImageUpload(images)}
          accept="image/png,image/jpg,application/pdf"
          isMultiple
        />
      </div>
    );
  }
}
