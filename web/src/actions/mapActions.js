import { ACTIONS } from '../constants'
import { RoutingService } from '../helpers/RoutingService'

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
      .then(routes => dispatch(receiveRoutes(routes)))
  }
}