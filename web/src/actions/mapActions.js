import {ACTIONS} from '../constants'
import {RoutingService} from '../helpers/RoutingService'
import {AirQualityRoutingService} from "../helpers/AirQualityRoutingService";
import _ from 'lodash'

export const openFiltersScreen = () => {
  return {
    type: ACTIONS.OpenFiltersScreen
  }
}

export const requestRoutes = () => {
  return {
    type: ACTIONS.RequestRoutes
  }
}

export const receiveRoutes = (routes) => {
  return {
    type: ACTIONS.ReceiveRoutes,
    payload: routes
  }
}

export const receiveAirQuality = () => {
  return {
    type: ACTIONS.AirReceived
  }
}

export const fetchRoutes = (from, to, transport, eco, fast) => {
  return (dispatch) => {
    dispatch(requestRoutes());
    const routingService = new RoutingService();
    return routingService.getRoutes(from, to, transport)
      .then(routes => {
        if (eco && fast) return routes;
        else return _.filter(routes, ['eco', eco]);
      })
      .then(routes => {
        const airQualityRoutingService = new AirQualityRoutingService();
        airQualityRoutingService.addAirQualityInfo(routes).then(updatedRoutes => {
            console.log(routes)

            console.log(updatedRoutes);
            dispatch(receiveRoutes(updatedRoutes));
            dispatch(receiveAirQuality())
          }
        );
        return dispatch(receiveRoutes(routes))
      })
  }
}
