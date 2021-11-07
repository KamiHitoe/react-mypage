import React from 'react';
import backgroundHeader from '../assets/background-header.png';

function Header() {
  return (
    <header>
      <h1 id="title-header">Miyuki's Room</h1>
      <img id="background-header" src={backgroundHeader} alt="background-header" />
    </header>
  )
}

export default Header;
