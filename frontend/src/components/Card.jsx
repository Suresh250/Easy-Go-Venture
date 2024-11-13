import React from 'react';
import '../css/Card.css'

const Card = ({ image, title, description, price, onBookNowClick,duration }) => {
  const handleBookNowClick = () => {
    onBookNowClick({ image, title, description, price, duration });
  };

  return (
    <article className="card col">
      <img className="card-img" src={image} alt={title} width={100} height={200} />
      <h4 className="dark">{title}</h4>
      <p className="font-color">{description}</p>
      <p className="font-color">Price: ₹{price}</p>
      <button onClick={handleBookNowClick} className="ctn">Book Now</button>
    </article>
  );
};

export default Card;
