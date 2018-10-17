import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
// ...
 
export class MapContainer extends Component {
    render() {
        return (
          <Map google={this.props.google} zoom={14}>
     
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
     
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  {/* <h1>{this.state.selectedPlace.name}</h1> */}
                  <h1>Dew</h1>
                </div>
            </InfoWindow>
          </Map>
        );
    } 
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCw01DK-21wiJNpA8yB0dFaA4oTGA-D67k')
})(MapContainer)