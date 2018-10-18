import React, {Component} from 'react'
import {GoogleApiWrapper, Map, Marker, Polyline} from 'google-maps-react'
import {Point} from '../helpers/RoutingService'
import {connect} from 'react-redux'
import {fetchRoutes} from '../actions'
import _ from 'lodash'

export class MapContainer extends Component {
    componentWillMount() {
        let from = new Point(45.811357, 15.974306)
        let to = new Point(45.837375, 16.025867)
        let transport = 'foot'
        this.props.dispatch(fetchRoutes(from, to, transport))
    }

    render() {
        const {routes} = this.props
        console.log(routes);
        let i = 0;
        let lines = _.flatten(
            _.map(routes, (route) => {
                return _.map(route.segments, (s) => {
                    i = i + 1;
                    return (
                        <Polyline key={`line_${i}`}
                                  path={s.points}
                                  strokeColor={route.eco ? 'green' : 'red'}
                                  strokeOpacity={0.8}
                                  strokeWeight={4}/>
                    )
                });
            }));
        return (
            <Map google={this.props.google}
                 onClick={this.onMapClicked}
                 initialCenter={{
                     lat: 45.812236,
                     lng: 15.980941
                 }}>

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