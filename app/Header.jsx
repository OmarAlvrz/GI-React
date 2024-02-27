// Header.jsx
import React, { useState } from 'react';

const Header = () => {
  const [showWeaponsMenu, setShowWeaponsMenu] = useState(false);
  const [selectedWeapon, setSelectedWeapon] = useState(null);

  const toggleWeaponsMenu = () => {
    setShowWeaponsMenu(!showWeaponsMenu);
  };

  const handleWeaponFilter = (weaponType) => {
    setSelectedWeapon(weaponType);
    setShowWeaponsMenu(false); // Oculta el menú después de hacer clic en un arma
  };

  return (
    <header className="header">
      <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="https://cdn2.steamgriddb.com/icon_thumb/65ae27b8c33157282761f37083da12dd.png" alt=" " style={{ width: '50px', height: '50px' }} />
        <span>Genshin Impact</span>
      </div>
      <nav className="nav">
        <a href="/">Inicio</a>
        <a href="/contact" onMouseEnter={toggleWeaponsMenu} onMouseLeave={toggleWeaponsMenu}>
          Armas
          {showWeaponsMenu && (
            <div className="weapons-menu">
              <a onClick={() => handleWeaponFilter('Espadas')}> Espadas |</a>
              <a href="/weapons/bow" onClick={() => handleWeaponFilter('Arcos')}> Arcos |</a>
              <a href="/weapons/claymore" onClick={() => handleWeaponFilter('Mandobles')}> Mandobles |</a>
              <a href="/weapons/polearm" onClick={() => handleWeaponFilter('Lanzas')}> Lanzas |</a>
              <a href="/weapons/catalyst" onClick={() => handleWeaponFilter('Catalizadores')}> Catalizadores </a>
            </div>
          )}
        </a>
      </nav>
    </header>
  );
};

export default Header;