// FlashCards.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlashCards = () => {
  // State to hold flash cards
  const [cards, setCards] = useState([]);
  
  // Fetch cards from the server
  useEffect(() => {
    axios.get('http://localhost:3000/cards')
      .then(response => setCards(response.data))
      .catch(error => console.error('Error fetching cards:', error));
  }, []);

  // Add more state and functions for card management (create, edit, delete)

  return (
    // Implement UI to display and manage flash cards
    <div>
      {/* Display Cards */}
      {cards.map(card => (
        <div key={card.id}>
          {/* Display card information */}
          <p>Front: {card.front}</p>
          <p>Back: {card.back}</p>
          <p>Status: {card.status}</p>
          <p>Last Modified: {card.lastModified}</p>

          {/* Edit and Delete buttons */}
          <button onClick={() => handleEditCard(card.id)}>Edit</button>
          <button onClick={() => handleDeleteCard(card.id)}>Delete</button>
        </div>
      ))}

      {/* Create Card Option */}
      {/* Implement UI for creating new cards */}

      {/* Search Functionality */}
      {/* Implement search functionality based on text on either side */}

      {/* Filter Option */}
      {/* Implement filtering cards by status */}

      {/* Sort Option */}
      {/* Implement sorting cards based on various attributes */}
    </div>
  );
};

export default FlashCards;
