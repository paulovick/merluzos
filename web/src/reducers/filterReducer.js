import { ACTIONS } from '../constants'

const INITIAL_STATE = {
  from: {
    isLoading: false,
    results: [],
    value: ''
  },
  to: {
    isLoading: false,
    results: [],
    value: ''
  }
}

const filterReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ACTIONS.RequestSearch:
      var result = {
        ...state
      }
      result[action.payload.fieldName].isLoading = true
      result[action.payload.fieldName].value = action.payload.value
      return result
    case ACTIONS.ReceiveSearch:
      var result = {
        ...state
      }
      result[action.payload.fieldName].isLoading = false

      const results = action.payload.results.map((result) => {
        return {
          address: result.formatted_address,
          latitude: result.geometry.location.latitude,
          longitude: result.geometry.location.longitude,
          name: result.name
        }
      })
      result[action.payload.fieldName].results = results
      return result
    default:
      return state
  }
}

export { filterReducer }