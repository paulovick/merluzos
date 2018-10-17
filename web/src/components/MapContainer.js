import React, {Component} from 'react'
import {Map, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react'
import { Point } from '../helpers/RoutingService'
import { connect } from 'react-redux'
import { fetchRoutes } from '../actions'

export class MapContainer extends Component {
  componentWillMount() {
    let from = new Point(16.3657665, 48.2114620)
    let to = new Point(16.18465, 48.216799)
    let transport = 'foot'
    this.props.fetchRoutes(from, to, transport)
  }

  render() {
    const { routes } = this.props

    return (
      <Map google={this.props.google}
           onClick={this.onMapClicked}>

        <Marker name={'Current location'} />

        <Polyline path={routes}
                  strokeColor={'red'}
                  strokeOpacity={0.8}
                  strokeWeight={2} />
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
    fetchRoutes: () => dispatch(fetchRoutes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(mapsWrapper)