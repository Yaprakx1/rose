import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>KİTAP DÜNYASI</h1>
      <div>
      <NavLink to="/">Anasayfa</NavLink>
      <NavLink to="/books">Kitaplar</NavLink>
      </div>
      
    </header>
  )
}

export default Header;
