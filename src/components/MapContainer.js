import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    // width: '100%',
    // height: '50%'
};

export class MapContainer extends Component {
    render() {
        return (
                <div style={{ position: 'relative', width: '80vw', height: '120vh' }}>
            <Map
              google={this.props.google}
              zoom={14}
              style={mapStyles}
              initialCenter={{
               lat: 28.6610,
               lng:  77.2864
              }}
            />
            </div> 
          );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBSMesz8paiptWeG_QGL9LfzEN3LAsD7fo"
})(MapContainer);