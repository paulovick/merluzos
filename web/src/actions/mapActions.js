import { ACTIONS } from '../constants'
import {AirQualityService, RoutingService} from '../helpers/RoutingService'

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

export const fetchRoutes = (from, to, transport) => {
  return (dispatch) => {
    dispatch(requestRoutes())
    const routingService = new RoutingService()
    return routingService.getRoutes(from, to, transport)
      .then(routes => {
          console.log(routes);
          routes.forEach(function (route) {
              let transformedPoints = route.points.map((point) => {
                  return {latitude: point.lat, longitude: point.lng }
              });
              new AirQualityService().getPoints(transformedPoints);
          })
          return dispatch(receiveRoutes(routes[0].points))
      })
  }
}