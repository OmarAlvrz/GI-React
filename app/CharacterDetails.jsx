// CharacterDetails.jsx
import React from 'react';

const CharacterDetails = ({ character }) => {
  return (
    <div className="character-details">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Rareza: {character.rarity}</p>
      {/* Agrega más detalles según sea necesario */}
    </div>
  );
};

export default CharacterDetails;
