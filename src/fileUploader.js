import React from "react";

export default class FileUploader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imageURIs: []
    };
  }

  handleChange = e => {
    e.preventDefault();
    const imageURIs = [];
    for (let i = 0; i < e.target.files.length; i++) {
      let reader = new FileReader();
      let file = e.target.files[i];
      reader.onloadend = () => {
        imageURIs.push(reader.result);
        this.setState(
          {
            imageURIs
          },
          () => {
            this.props.handleImageUpload(imageURIs);
          }
        );
      };
      reader.readAsDataURL(file);
    }
  };

  render() {
    const { isMultiple, accept } = this.props;
    return (
      <>
        <input
          className="custom-file-input"
          type="file"
          onChange={e => this.handleChange(e)}
          multiple={isMultiple}
          accept={accept}
        />
      </>
    );
  }
}
