import React from "react";

const Modal = props => {
  const { imagePreviewUrl, onModalClose } = props;
  return (
    <div className="carousel-modal">
      <img alt="modal-img" src={imagePreviewUrl} />
      <img
        style={{
          position: "absolute",
          width: 20,
          right: 15,
          top: 15,
          zIndex: 2,
          cursor: "pointer",
          padding: 15,
          borderRadius: "50%",
          background: "#fff"
        }}
        onClick={onModalClose}
        alt="close-icon"
        src="../images/close.svg"
      />
    </div>
  );
};

export default Modal;
