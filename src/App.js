import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import homepage from './components/HomePage/homepage';
import userprofile from './components/UserProfile/UserProfile';
import Question from './components/Question/question';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={homepage} />
          <Route path='/home/' component={homepage} />
          <Route path='/user/' component={userprofile} />
          <Route path='/question/' component={Question} />
        </div>
      </Router>
    );
  }
}

export default App;