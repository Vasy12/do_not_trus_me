import React    from 'react';
import { Link } from 'react-router-dom';

function About () {

  return (
    <>
      <h1>About Page</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default About;
