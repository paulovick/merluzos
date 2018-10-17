import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';
import { RoutingService, Point } from '../routing';
 
// ...

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      triangleCoords: []
    };

    componentWillMount() {
      let from = new Point(16.3657665, 48.2114620);
      let to = new Point(16.18465, 48.216799);
      let transport = 'foot';
      new RoutingService().getRoutes(from, to, transport).then(routes => {
        this.setState ({
          ...this.state,
          triangleCoords: routes[0].points
        }) 
      })
    }

    onMarkerClick = (props, marker, e) =>
    this.setState({
      ...this.state,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          ...this.state,
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
  
    render() {
     /*  const triangleCoords = [
        {lat: 25.774, lng: -80.190},
        {lat: 18.466, lng: -66.118},
        {lat: 32.321, lng: -64.757},
        {lat: 25.774, lng: -80.190}
      ]; */
      var coords = this.state.triangleCoords;
      const colors = ["#0000FF", "#FF0000", "#00FF00"];
        return (
         
          <Map google={this.props.google}
          onClick={this.onMapClicked}
          initialCenter={{
            lat: 45.812236, 
            lng: 15.980941
          }}>

            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>

              
                  <Polyline
                    path={this.state.triangleCoords}
                    strokeColor={'red'}
                    strokeOpacity={0.8}
                    strokeWeight={2} />
                

            
          </Map>

          )
    } 
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCSX1Vis_20mfI2G0CI4fy_nWUeUTs1wOA')
})(MapContainer)