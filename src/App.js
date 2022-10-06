import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import homepage from './components/HomePage/homepage';
import userprofile from './components/UserProfile/UserProfile';
import Question from './components/Question/question';
import logoutuser from './components/logout/logout';

class App extends Component {
  render() {
    console.log("Render component first!!");
    return (
      <Router>
        <div>
          <Route exact path='/' component={homepage} />
          <Route path='/home/' component={homepage} />
          <Route path='/user/' component={userprofile} />
          <Route path='/question/:question_id' component={Question} />
          <Route path="/logout/" component={logoutuser} />
        </div>
      </Router>
    );
  }
}

export default App;