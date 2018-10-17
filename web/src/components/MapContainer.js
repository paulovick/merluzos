import React, {Component} from 'react'
import {Map, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react'
import { Point } from '../helpers/RoutingService'
import { connect } from 'react-redux'
import { fetchRoutes } from '../actions'

export class MapContainer extends Component {
  componentWillMount() {
    let from = new Point(45.811357, 15.974306)
    let to = new Point(45.807408, 15.991293)
    let transport = 'foot'
    this.props.dispatch(fetchRoutes(from, to, transport))
  }

  render() {
    const { routes } = this.props

    return (
      <Map google={this.props.google}
           onClick={this.onMapClicked}
           initialCenter={{
             lat: 45.812236, 
             lng: 15.980941
           }}>

        <Marker name={'Current location'} />

        {
          routes.map((route) => {
            return (
              <Polyline key={`${route.eco}`}
                        path={route.points}
                        strokeColor={route.eco ? 'green' : 'red'}
                        strokeOpacity={0.8}
                        strokeWeight={4} />
            )
          })
        }
      </Map>
    )
  } 
}
 
const mapsWrapper = GoogleApiWrapper({
  apiKey: ('AIzaSyCSX1Vis_20mfI2G0CI4fy_nWUeUTs1wOA')
})(MapContainer)

const mapStateToProps = (state) => {
  return {
    routes: state.map.routes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(mapsWrapper)