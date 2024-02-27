'use client';

// App.jsx
import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import SearchBar from './SearchBar';
import CharacterDetails from './CharacterDetails';
import Header from './header';
import './style.css';
import charactersData from './charactersData';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const filteredCharacters = charactersData.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedCharacter(null);
  };

  return (
    <div className="app">
      <Header />  
      <SearchBar handleSearch={handleSearch} />
      <div className="character-container">
        {filteredCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={() => setSelectedCharacter(character)}
          />
        ))}
      </div>
      {selectedCharacter && <CharacterDetails character={selectedCharacter} />}
    </div>
  );
};

export default App;