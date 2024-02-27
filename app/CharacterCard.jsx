// CharacterCard.jsx
'use client';

import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Rareza: {character.rarity}</p>
    </div>
  );
};

export default CharacterCard;
