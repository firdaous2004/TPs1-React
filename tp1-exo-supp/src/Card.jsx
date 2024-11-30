import React from 'react';
import './Card.css';

function Card({ title, description, price, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-actions">
        <button>Add to Cart</button>
        <button>Buy</button>
      </div>
    </div>
  );
}

export default Card;