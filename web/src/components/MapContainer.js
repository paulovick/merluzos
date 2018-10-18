import React, {Component} from 'react'
import {GoogleApiWrapper, Map, Marker, Polyline, InfoWindow} from 'google-maps-react'
import {Point} from '../helpers/RoutingService'
import {connect} from 'react-redux'
import {fetchRoutes} from '../actions'
import _ from 'lodash'
import {LEVELS} from '../constants/polutionLevels';
import PopUp from './PopUp'

export class MapContainer extends Component {
  constructor(props) {
    super(props)

    this.isValidFormData = this.isValidFormData.bind(this)
    this.onMapReady = this.onMapReady.bind(this)
  }

  componentWillMount() {
    console.log("componentWillMount");
    // let from = new Point(45.811357, 15.974306);
    // let to = new Point(45.837375, 16.025867);
    // //let transport = 'bike';
    // let transport = 'foot';
    // let eco = true;
    // let fast = true;
    // this.props.dispatch(fetchRoutes(from, to, transport, eco, fast))
  }

  isValidFormData(prevProps) {
    const validProperties = this.props.from !== null
                        && this.props.to !== null
                        && this.props.routeType !== null
    if (!validProperties)
      return false
    
    const validPrevProperties = prevProps.from !== null
                        && prevProps.to !== null
                        && prevProps.routeType !== null
    if (!validPrevProperties)
      return true

    const result = this.props.from.latitude !== prevProps.from.latitude
      || this.props.from.longitude !== prevProps.from.longitude
      || this.props.to.longitude !== prevProps.to.longitude
      || this.props.to.latitude !== prevProps.to.latitude
      || this.props.routeType !== prevProps.routeType
      || this.props.eco !== prevProps.eco
      || this.props.fast !== prevProps.fast

    return result
  }

  componentDidUpdate(prevProps) {
    if (this.isValidFormData(prevProps)) {
      const from = new Point(this.props.from.latitude, this.props.from.longitude)
      const to = new Point(this.props.to.latitude, this.props.to.longitude)
      const transport = this.props.routeType
      const eco = this.props.eco
      const fast = this.props.fast
      this.props.dispatch(fetchRoutes(from, to, transport, eco, fast))
    }
  }

  colorByLevel(level) {
    console.log(level);
    console.log(LEVELS[level].color);
    return LEVELS[level].color;
  }

  clickPolyline(props, line, e) {
    let lat = e.latLng.lat();
    let lng = e.latLng.lng();
    console.log(props.level);
  }

  onMapReady(mapProps, map) {
    const { google } = mapProps
    window.placesService = new google.maps.places.PlacesService(map)
  }

  render() {
    const {routes, google} = this.props;
    let i = 0;
    const lineSymbol = {
      path: google.maps.SymbolPath.CIRCLE,
      strokeOpacity: 1,
      scale: 3
    };
    let lines = _.flatten(
      _.map(routes, (route) => {
        return _.map(route.segments, (s) => {
          i = i + 1;
          if (route.eco) {
            return (
              <Polyline key={`line_${i}`}
                        path={s.points}
                        strokeColor={this.colorByLevel(s.level)}
                        strokeOpacity={0.}
                        strokeWeight={2}
                        icons={[{
                          icon: lineSymbol,
                          offset: '0',
                          repeat: '10px'
                        }]}
                        onClick={this.clickPolyline}
                        level={s.level}
              />
            )
          } else {
            return (
              <Polyline key={`line_${i}`}
                        path={s.points}
                        strokeColor={this.colorByLevel(s.level)}
                        strokeOpacity={0.8}
                        strokeWeight={4}
              />
            )
          }

        });
      }));
    return (
      <Map google={this.props.google}
           initialCenter={{
             lat: 45.812236,
             lng: 15.980941
           }}
           onReady={this.onMapReady}>
        <Marker name={'To'} position={{lat: 45.837375, lng: 16.025867}}/>
        <InfoWindow
          visible={true}
          position={{lat: 45.837375, lng: 16.025867}}>
          <PopUp></PopUp>
        </InfoWindow>
        {
          lines
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
    from: state.map.from,
    to: state.map.to,
    routeType: state.map.routeType,
    eco: state.map.eco,
    fast: state.map.fast,
    routes: state.map.routes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(mapsWrapper)
