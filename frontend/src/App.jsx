import React, { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import HolidaySpecial from './components/HolidaySpecial';
import RegularTour from './components/RegularTour';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import SignUpLogin from './components/SignUpLogin';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  // Function to open the modal with the selected item
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);  // Clear selected item when modal is closed
  };
  const handleSignUpClick = () => {
    navigate('/signuplogin');  // Navigating to the SignUp/Login page
  };

  return (
    <>
      <Navbar onSignUpClick={handleSignUpClick}/>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <section><HolidaySpecial onBookNowClick={openModal} /></section>
            <section><RegularTour onBookNowClick={openModal} /></section>
            <Contact />
            <Footer />
          </>
        } />
        <Route path="SignUpLogin" element = {<SignUpLogin />} />
      </Routes>
      {/* Render the BookingModal */}
      {isModalOpen && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedItem={selectedItem}
        />
      )}
    </>
  );
};

export default App;