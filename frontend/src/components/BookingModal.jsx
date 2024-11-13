import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faTaxi, faHotel, faMapMarkerAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../css/BookingModal.css';

Modal.setAppElement('#root'); // Required for accessibility

const BookingModal = ({ isOpen, onClose, selectedItem }) => {
  if (!selectedItem) {
    console.log("No item selected"); // Log if selectedItem is null or undefined
    return null; // Avoid rendering if no item is selected
  }

  const { image, title, description, price, duration } = selectedItem;

  console.log("Selected Item in Modal:", selectedItem); 

  // Steps array with icon and text
  const steps = [
    { icon: faPlane, text: 'Tickets' },
    { icon: faTaxi, text: 'Taxi to hotel' },
    { icon: faHotel, text: 'Hotels' },
    { icon: faMapMarkerAlt, text: 'Tourist Guide' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Booking Form"
      style={{
        content: {
          width: '75%',
          height: '75%',
          margin: 'auto',
          borderRadius: '10px',
          padding: '20px',
        },
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
      }}
    >
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">X</button>

        {/* Left Section: Image */}
        <div className="modal-image">
          <img src={image} alt={title} />
        </div>

        {/* Right Section: Details */}
        <div className="modal-details">
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Price: ₹{price}</p>
          <p>Duration: {duration} days</p>

          {/* Steps Section */}
          <ol className="booking-steps">
            {steps.map((step, index) => (
              <li key={index} className="step-item">
                {/* <span className="step-number">Step {index + 1}: </span> */}
                <span className="step-text">{step.text}</span>
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
              </li>
            ))}
          </ol>

          <button className="modal-booking-button">Add Booking</button>
        </div>
      </div>
    </Modal>
  );
};

export default BookingModal;
