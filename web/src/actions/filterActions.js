import { ACTIONS } from '../constants'

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
    //const inputType = 'textquery'
    //const fields = 'formatted_address,name,geometry/location'
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
        console.log(json)
        dispatch(receiveSearch(fieldName, json.results))
      })
  }
}