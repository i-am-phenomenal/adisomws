import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutUsView from "./components/Aboutus";

export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {}
      }

      renderNavBar = () => {
        return( <NavigationBar /> )
      }

      renderSwitch = () => {
        return(
          <Router> 
            <Switch> 
              <Route path="/about_us/"> 
                <AboutUsView /> 
              </Route>
            </Switch>
          </Router>
        )
      }

      render() {
        return(
          <div> 
            {this.renderNavBar()}
            {this.renderSwitch()}
          </div> 
        )
      }
}