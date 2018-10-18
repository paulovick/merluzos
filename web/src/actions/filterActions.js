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

    const apiKey = 'AIzaSyCSX1Vis_20mfI2G0CI4fy_nWUeUTs1wOA'
    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?key=${apiKey}&query=${encodeURI(text)}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Methods':'POST, GET'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(json => {
        dispatch(receiveSearch(fieldName, json.results))
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