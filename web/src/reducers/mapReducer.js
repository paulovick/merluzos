import { ACTIONS } from '../constants'

const INITIAL_STATE = {
  from: null,
  to: null,
  routeType: null,
  eco: false,
  fast: false,
  showAlerts: false,
  routes: [],
  isLoadingAir: false
}

const mapReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ACTIONS.RequestRoutes:
      return {
        ...INITIAL_STATE,
        showAlerts: true,
        isLoadingAir: true
      }
    case ACTIONS.ReceiveRoutes:
      return { ...state, routes: action.payload }
    case ACTIONS.AirReceived:
      return { ...state, isLoadingAir: false }
    case ACTIONS.ConfirmFilter:
      console.log(action.payload)
      return {
        ...state,
        from: action.payload.from,
        to: action.payload.to,
        routeType: action.payload.routeType,
        eco: action.payload.eco,
        fast: action.payload.fast
      }
    default:
      return state
  }
}

export { mapReducer }