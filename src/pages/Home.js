import React    from 'react';
import { Link } from 'react-router-dom';

function Home () {

  return (
    <>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>
    </>
  );

}

export default Home;
