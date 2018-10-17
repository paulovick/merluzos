import { SCREENS, ACTIONS } from '../constants'

const INITIAL_STATE = {
  currentScreen: SCREENS.MapScreen
}

const screenReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ACTIONS.OpenFiltersScreen:
      return { ...state, currentScreen: SCREENS.FiltersScreen }
    default:
      return state
  }
}

export { screenReducer }