// BookingForm.jsx
import React, { useState } from 'react';
import '../css/BookingForm.css'

const BookingForm = ({ onCloseForm ,destination}) => {
  const [date, setDate] = useState('');
  const [members, setMembers] = useState(1);
  const [departureTime, setDepartureTime] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Retrieve email from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const email = storedUser ? storedUser.emailOrPhone : null;
  
    // Check if email is available
    if (!email) {
      alert('User email is not available. Please log in again.');
      return;
    }
  
    const bookingData = {
      email,
      travelDate: date, 
      members,
      departureTime,
      destination,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/bookings/addBooking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        onCloseForm();
      } else {
        alert('Failed to add booking');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while booking.');
    }
  };
  
  

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Booking Details</h2>

      <label>
        Travel Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>

      <label>
        Number of Members:
        <input type="number" min="1" value={members} onChange={(e) => setMembers(e.target.value)} required />
      </label>

      <label>
        Preferred Departure Time:
        <select value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} required>
          <option value="" disabled>Select a time</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      </label>

      <button type="submit" className="confirm-booking-button">Confirm Booking</button>
    </form>
  );
};


export default BookingForm;
