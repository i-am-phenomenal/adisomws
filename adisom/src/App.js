import React, {Component} from 'react';
// import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutUsView from "./components/Aboutus";
import ContactUsView from "./components/ContactUs";
import OurWorkView from "./components/OurWork";
import Header from './components/Header/Header.component';
// import InfoSection from './components/InfoSection/InfoSection.component';

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
              <Route path="/our_work/"> 
                <OurWorkView /> 
              </Route> 
              <Route path="/disaster_response/"> 
                <AboutUsView /> 
              </Route> 
              <Route path="/contact_us/"> 
                <ContactUsView /> 
                </Route> 
            </Switch>
          </Router>
        )
      }

      renderHeader = () => {
        return(<Header /> )
      }

      renderInfo = () => {
        // return(<InfoSection />)
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
