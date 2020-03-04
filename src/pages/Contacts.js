import React    from 'react';
import { Link } from 'react-router-dom';

function Contacts () {

  return (
    <>
      <h1>Contacts</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Contacts;
