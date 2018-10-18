import React, {Component} from 'react'
import {GoogleApiWrapper, Map, Marker, Polyline} from 'google-maps-react'
import {Point} from '../helpers/RoutingService'
import {connect} from 'react-redux'
import {fetchRoutes} from '../actions'
import _ from 'lodash'

export class MapContainer extends Component {
  componentWillMount() {
    console.log("componentWillMount");
    let from = new Point(45.811357, 15.974306);
    let to = new Point(45.837375, 16.025867);
    //let transport = 'bike';
    let transport = 'foot';
    let eco = true;
    let fast = true;
    this.props.dispatch(fetchRoutes(from, to, transport, eco, fast))
  }

  colorByLevel(level) {
    const colors = ['green', 'yellow', 'orange', 'red', '#540099', '#800000'];
    return colors[level - 1];
  }

  render() {
    const {routes} = this.props
    let i = 0;
    const lineSymbol = {
      path: 'M 0,-1 0,1',
      strokeOpacity: 1,
      scale: 4
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
                        strokeWeight={4}
                        icons={[{
                          icon: lineSymbol,
                          offset: '0',
                          repeat: '20px'
                        }]}
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
           onClick={this.onMapClicked}
           initialCenter={{
             lat: 45.812236,
             lng: 15.980941
           }}>
        <Marker name={'To'} position={{lat: 45.837375, lng: 16.025867}}/>

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
    routes: state.map.routes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(mapsWrapper)
