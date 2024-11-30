import React from 'react';
import Card from './Card'; // Assurez-vous que le composant Card est bien importé
import './Content.css';

function Content() {
  return (
    <div className="content">
      <h1>Nearest Seller</h1>
      <div className="cards-container">
        <Card
          title="Wireless bluetooth headset"
          description="Shipped in 3-4 days"
          price="$35.99"
          image="casque.jpg" // Remplacez par le chemin de votre image
        />
        <Card 
          // ... autres propriétés pour la deuxième carte
        />
        <Card 
          // ... autres propriétés pour la troisième carte
        />
      </div>
    </div>
  );
}

export default Content;