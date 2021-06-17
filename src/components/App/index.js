import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './style.css';

import Footer from '../Footer'
import BuildList from '../BuildList'
import BuildDetails from '../BuildDetails'
import Settings from '../Settings'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={BuildList}/>
        <Route path='/build/:number' component={BuildDetails}/>
        <Route path='/settings' component={Settings}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
