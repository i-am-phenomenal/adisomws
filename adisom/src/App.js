import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutUsView from "./components/Aboutus";
import Header from './components/Header/Header.component';

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

      renderHeader = () => {
        return(<Header /> )
      }

      render() {
        return(
          <div>
            {this.renderNavBar()}
            {this.renderHeader()}
            {this.renderSwitch()}
          </div>
        )
      }
}
