import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
}            from 'react-router-dom';

import Home     from './pages/Home.js';
import About    from './pages/About.js';
import Contacts from './pages/Contacts.js';

export default function BasicExample () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>


        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contacts">
          <Contacts/>
        </Route>
      </Switch>
    </Router>
  );
}


