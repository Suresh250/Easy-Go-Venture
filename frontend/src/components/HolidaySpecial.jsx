import React from 'react';
import Card from './Card';
import { holidaySpecials } from '../data';

function HolidaySpecial({ onBookNowClick }) {
  return (
    <div id="HolidaySpecial" className="holiday-special">
      <h1 className="title">Holiday Specials</h1>
      <div className="row">
        {holidaySpecials.map((special) => (
          <Card 
            key={special.id} 
            title={special.title} 
            image={special.image} 
            description={special.description} 
            price={special.price} 
            duration = {special.duration}
            onBookNowClick={onBookNowClick}
          />
        ))}
      </div>
    </div>
  );
}

export default HolidaySpecial;
