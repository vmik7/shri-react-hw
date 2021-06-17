import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';


import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import BuildList from './../BuildList/BuildList'
import BuildDetails from './../BuildDetails/BuildDetails'
import Settings from './../Settings/Settings'

function App() {
  return (
    <div className="App">
      <Header />
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
