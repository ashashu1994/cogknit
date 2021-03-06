

import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/home';
import './assets/main.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <Switch>
            <>
              <Route exact path="/" component={Home} />
            </>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
