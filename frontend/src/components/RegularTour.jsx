// RegularTour.jsx
import React from 'react';
import Card from './Card';
import { regularTours } from '../data';
import '../css/RegularTours.css'

function RegularTour({ onBookNowClick }) {
  return (
    <div id="tours" className="regular-tour">
      <h2 className="title">Regular Tours</h2>
      <div className="row">
        {regularTours.map((tour) => (
          <Card 
          key={tour.id} 
          title={tour.title} 
          image={tour.image} 
          description={tour.description}
          price={tour.price} 
          duration={tour.duration}
          onBookNowClick={onBookNowClick} />
        ))}
      </div>
    </div>
  );
}

export default RegularTour;
