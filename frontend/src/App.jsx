import React, { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import HolidaySpecial from './components/HolidaySpecial';
import RegularTour from './components/RegularTour';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import SignUpLogin from './components/SignupLogin';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [user, setUser] = useState(null); // State for user login info
  const navigate = useNavigate();

  // Check if user is already logged in when the component mounts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser); // Set user state if user is logged in
    }
}, []);


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

  // Handle SignUp/Login click (opens the modal or navigates to login page)
  const handleSignUpClick = () => {
    navigate('/signuplogin');  // Navigating to the SignUp/Login page
  };

  // Handle successful login
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Store user in localStorage
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user from localStorage
  };

  return (
    <>
      <Navbar 
        onSignUpClick={handleSignUpClick} 
        user={user} // Pass user data to Navbar
        onLogout={handleLogout} // Pass logout function to Navbar
      />
      <Routes>
        {/* Define homepage route */}
        <Route path="/" element={
          <>
            <Header />
            <section><HolidaySpecial onBookNowClick={openModal} /></section>
            <section><RegularTour onBookNowClick={openModal} /></section>
            <Contact />
            <Footer />
          </>
        } />
        {/* Define the SignUp/Login route */}
        <Route path="/signuplogin" element={<SignUpLogin onLogin={handleLogin} />} />
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