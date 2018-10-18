import { ACTIONS } from '../constants'

export const closeFiltersScreen = () => {
  return {
    type: ACTIONS.CloseFiltersScreen
  }
}

export const changeRouteType = (routeType) => {
  return {
    type: ACTIONS.ChangeRouteType,
    payload: routeType
  }
}

export const changeSearchInput = (fieldName, value) => {
  return {
    type: ACTIONS.SelectSearch,
    payload: {
      fieldName,
      value
    }
  }
}

export const requestSearch = (fieldName, value) => {
  return {
    type: ACTIONS.RequestSearch,
    payload: {
      fieldName,
      value
    }
  }
}

export const receiveSearch = (fieldName, results) => {
  return {
    type: ACTIONS.ReceiveSearch,
    payload: {
      fieldName,
      results
    }
  }
}

export const fetchSearch = (fieldName, text) => {
  return (dispatch) => {
    dispatch(requestSearch(fieldName, text))

    const request = {
      query: text
    }

    window.placesService.textSearch(request, (results, status) => {
      if (status === 'OK')
        dispatch(receiveSearch(fieldName, results))
    })
  }
}

export const changeToggle = (toggleName) => {
  return {
    type: ACTIONS.ChangeToggle,
    payload: toggleName
  }
}

export const confirmFilter = (filter) => {
  return {
    type: ACTIONS.ConfirmFilter,
    payload: filter
  }
}