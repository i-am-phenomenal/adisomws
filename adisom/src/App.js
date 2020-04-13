import React, {Component} from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar.component';
import Header from './components/Header/Header.component';
import InfoSection from './components/InfoSection/InfoSection.component';

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

      renderInfo = () => {
        return(<InfoSection />)
      }

      render() {
        return(
          <div> 
            {this.renderNavBar()}
            {this.renderHeader()}
            {this.renderInfo()}
          </div> 
        )
      }
}