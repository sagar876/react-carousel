import React from "react";
import PropTypes from "prop-types";
const successMsgStyle = {
  color: "green",
  fontWeight: 500
};
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
            this.handleUploadMessage();
          }
        );
      };
      reader.readAsDataURL(file);
    }
  };

  handleUploadMessage = () => {
    this.setState({
      isUploaded: true
    });
    setTimeout(() => {
      this.setState({
        isUploaded: false
      });
    }, 2000);
  };

  render() {
    const { isMultiple, accept, successMessage } = this.props;
    return (
      <div className="fileupload-container">
        <input
          className="custom-file-input"
          type="file"
          onChange={e => this.handleChange(e)}
          multiple={isMultiple}
          accept={accept}
        />
        {this.state.isUploaded && (
          <p style={successMsgStyle}>{successMessage}</p>
        )}
      </div>
    );
  }
}

FileUploader.propTypes = {
  accept: PropTypes.string,
  successMsgStyle: PropTypes.string,
  isMultiple: PropTypes.bool
};

FileUploader.defaultProps = {
  accept: "",
  successMsgStyle: "Files uploaded",
  isMultiple: false
};
