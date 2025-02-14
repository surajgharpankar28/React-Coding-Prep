/* eslint-disable react/prop-types */
const Modal = ({ handleClose, handleAccept }) => {
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      handleClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose}>
          ✖
        </button>
        <p className="modal-text">
          Limited-time offer! Tap the button to claim now.{" "}
        </p>
        <button className="accept-btn" onClick={handleAccept}>
          Accept Offer
        </button>
      </div>
    </div>
  );
};

export default Modal;
