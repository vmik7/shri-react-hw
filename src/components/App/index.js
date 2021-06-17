import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './style.scss';

import Footer from '../Footer'
import BuildList from '../BuildList'
import BuildDetails from '../BuildDetails'
import Settings from '../Settings'

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Switch>
          <Route exact path='/' component={BuildList}/>
          <Route path='/build/:number' component={BuildDetails}/>
          <Route path='/settings' component={Settings}/>
        </Switch>
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
