import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar.component';

export default class App extends Component {
      constructor(props) {
        super(props);
        this.state = {}
      }

      renderNavBar = () => {
        return(<NavigationBar /> )
      }

      render() {
        return(
          <div> 
            {this.renderNavBar()}
          </div> 
        )
      }
}