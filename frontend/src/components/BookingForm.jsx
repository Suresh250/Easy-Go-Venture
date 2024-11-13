// BookingModal.jsx
import React from 'react';
import '../css/BookingModal.css'; 

const BookingModal = ({ selectedItem, onClose }) => {
  if (!selectedItem) return null; // Avoid rendering if no item is selected

  const { image, title, description, price } = selectedItem;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          {/* Left Section: Image */}
          <div className="modal-image">
            <img src={image} alt={title} />
          </div>

          {/* Right Section: Text */}
          <div className="modal-details">
            <h2 className="modal-title">{title}</h2>
            <p className="modal-description">{description}</p>
            <p className="modal-price">Price: ${price}</p>

            <button className="modal-booking-button">Confirm Booking</button>
          </div>
        </div>
        <button className="modal-close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default BookingModal;
