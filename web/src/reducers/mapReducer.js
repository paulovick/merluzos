import { ACTIONS } from '../constants'

const INITIAL_STATE = {
  routes: []
}

const mapReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ACTIONS.RequestRoutes:
      return { ...state }
    case ACTIONS.ReceiveRoutes:
      return { ...state, routes: action.payload }
    default:
      return state
  }
}

export { mapReducer }