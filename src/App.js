import React, { Component } from 'react'
import Login from './component/Login'
import PickTags from './component/PickTags'
import HomePage from './HomePage'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import './App.css'
class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" render = {()=><Login />} />
          <Route exact path = "/user" render = {()=><HomePage />} />
          <Route exact path = "/pick" render = {()=><PickTags />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
