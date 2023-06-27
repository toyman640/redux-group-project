import React from 'react';
import { NavLink } from 'react-router-dom';

const Navmenu = () => {
  <header>
    <nav>
      <div>
        <h2>Spaceship</h2>
      </div>
      <ul>
        <NavLink to="/rockets">Rockets</NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <NavLink to="/myprofile">MyProfile</NavLink>
      </ul>
    </nav>
  </header>;
};

export default Navmenu;
