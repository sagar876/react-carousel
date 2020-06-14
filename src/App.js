import React, { Component } from "react";
import Carousel from "./Carousel";
import FileUploader from "./fileUploader";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrlList: [
        "https://i.pinimg.com/originals/cc/18/8c/cc188c604e58cffd36e1d183c7198d21.jpg",
        "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&w=1000&q=80"
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
          successMessage="Image's uploaded successfully"
        />
      </div>
    );
  }
}
