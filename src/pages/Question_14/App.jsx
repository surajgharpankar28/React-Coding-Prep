import { useState, useCallback } from "react";
import Modal from "./Modal";
import "./styles.css";

export default function App() {
  const [isShow, setIsShow] = useState(false);
  const [isOfferAccepted, setIsOfferAccepted] = useState(false);

  const handleOpenModal = useCallback(() => setIsShow(true), []);
  const handleClose = useCallback(() => setIsShow(false), []);
  const handleAccept = useCallback(() => {
    setIsOfferAccepted(true);
    setIsShow(false);
  }, []);

  return (
    <div className="app ">
      <div className="show-offer">
        {isOfferAccepted ? (
          <h1 className="accepted-message">🎉 Offer Accepted! 🎉</h1>
        ) : (
          <button className="offer-btn" onClick={handleOpenModal}>
            Show Offer
          </button>
        )}
      </div>
      {isShow && (
        <Modal handleClose={handleClose} handleAccept={handleAccept} />
      )}
    </div>
  );
}
