import React, { Component } from 'react'
import { connect } from 'react-redux'
import MapContainer from './MapContainer'

class AppContainer extends Component {
  render() {
    return (
      <div>
        <MapContainer/>
      </div>
    )
  }
}

export default connect()(AppContainer)