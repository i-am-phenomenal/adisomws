import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar.component';
import Header from './components/Header/Header.component';

export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {}
      }

      renderNavBar = () => {
        return(<NavigationBar /> )
      }

      renderHeader = () => {
        return(<Header /> )
      }

      render() {
        return(
          <div> 
            {this.renderNavBar()}
            {this.renderHeader()}
          </div> 
        )
      }
}