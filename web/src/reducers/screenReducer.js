import { SCREENS, ACTIONS } from '../constants'

const INITIAL_STATE = {
  currentScreen: SCREENS.MapScreen
}

const screenReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ACTIONS.OpenFiltersScreen:
      return { ...state, currentScreen: SCREENS.FiltersScreen }
    case ACTIONS.CloseFiltersScreen:
      return { ...state, currentScreen: SCREENS.MapScreen }
    default:
      return state
  }
}

export { screenReducer }