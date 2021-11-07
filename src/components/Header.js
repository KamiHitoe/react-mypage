import React from 'react';
import backgroundHeader from '../assets/background-header.png';

function Header() {
  return (
    <header>
      <img id="background-header" src={backgroundHeader} alt="background-header" />
    </header>
  )
}

export default Header;
