import React, { Component } from 'react'
import { connect } from 'react-redux'
import MapContainer from './MapContainer'
import { Button } from 'semantic-ui-react'

class MapScreen extends Component {
  render() {
    const {
      fabContainerStyle,
      fabStyle
    } = style

    return (
      <div>
        <MapContainer />
        <div style={fabContainerStyle}>
          <Button style={fabStyle} circular icon="search" color="green" size="huge" />
        </div>
      </div>
    )
  }
}

const style = {
  fabContainerStyle: {
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  fabStyle: {
    boxShadow: '1px 3px 10px #888'
  }
}

export default connect()(MapScreen)