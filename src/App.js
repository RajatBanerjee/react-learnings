import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Popular from './Pages/Popular'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Pages/Home';
import Battle from './Pages/Battle';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Router>
            <div className="continer">
              <NavBar/>
              <Route path='/popular' component={Popular}/>
              <Route path='/home' component={Home}/>
              <Route path='/battle' component={Battle}/>
              <Route exact path='/' component={Home}/>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
