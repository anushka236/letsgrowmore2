import React from 'react';
import './App.css';
import Navbar from './components/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./home";
import { GetUsers } from './users';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/get' component={GetUsers} />

      </Switch>
    </Router>
  );
}

export default App;