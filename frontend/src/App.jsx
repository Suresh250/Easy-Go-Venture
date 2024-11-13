import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import HolidaySpecial from './components/HolidaySpecial';
import RegularTour from './components/RegularTour';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Open modal and set selected item
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);

  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BrowserRouter>
      <Navbar />
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
      </Routes>
      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedItem={selectedItem}
      />
    </BrowserRouter>
  );
};

export default App;
