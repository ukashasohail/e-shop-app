import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import Signin from './Signin'
import Signup from './Signup';
import '../App.css';


export default class Admin extends Component {
    render() {
        return (
            <Router basename="/react-auth-ui/">
            <div className="App">
              <div className="App__Aside"></div>
              <div className="App__Form">
                <div className="PageSwitcher">
                    <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                    <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                  </div>
    
                  <div className="FormTitle">
                      <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
                  </div>
    
                  <Route exact path="/" component={Signup}>
                  </Route>
                  <Route path="/sign-in" component={Signin}>
                  </Route>
              </div>
    
            </div>
          </Router>
        )
    }
}
