// CharacterCard.tsx
import React, { useState } from 'react';

interface CharacterCardProps {
  character: {
    id: number;
    name: string;
    image: string;
    rarity: string;
    weapon: string;
    element: string;
    region: string;
  };
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [isActive, setIsActive] = useState(false);

  let elementColor = '';
  let imgElement = '';

  if (character.element === 'Anemo') {
    elementColor = 'green';
    imgElement = 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/elements/Anemo.png?strip=all&quality=100&w=30';
  } else if (character.element === 'Pyro') {
    elementColor = 'red';
    imgElement = 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/elements/Pyro.png?strip=all&quality=100&w=30';
  } else if (character.element === 'Hydro') {
    elementColor = 'blue';
    imgElement = 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/elements/Hydro.png?strip=all&quality=100&w=30';
  } else if (character.element === 'Electro') {
    elementColor = 'yellow';
    imgElement = 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/elements/Electro.png?strip=all&quality=100&w=30';
  } else if (character.element === 'Cryo') {
    elementColor = 'cyan';
    imgElement = 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/elements/Cryo.png?strip=all&quality=100&w=30';
  } else if (character.element === 'Geo') {
    elementColor = 'orange';
    imgElement = 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/elements/Geo.png?strip=all&quality=100&w=30';
  } else if (character.element === 'Dendro') {
    elementColor = 'brown';
    imgElement = 'https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/elements/Dendro.png?strip=all&quality=100&w=30';
  }

  return (
    <div
      className={`character-card ${isActive ? 'active' : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Rareza: {character.rarity}</p>
      <p>Arma: {character.weapon}</p>
      <p>Región: {character.region}</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p>
          Elemento: <span style={{ color: elementColor }}>{character.element}</span>
        </p>
        <img src={imgElement} alt={character.element} style={{ marginLeft: '5px' }} />
      </div>
    </div>
  );
};

export default CharacterCard;
