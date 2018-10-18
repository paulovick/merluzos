import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import MapContainer from './MapContainer'
import { openFiltersScreen } from '../actions'
import { COLORS } from '../constants'

class MapScreen extends Component {
  onSearchClick() {
    this.props.openFiltersScreen()
  }

  render() {
    const {
      fabContainerStyle,
      fabStyle
    } = style
    
    return (
      <div>
        <MapContainer />
        <div style={fabContainerStyle}>
          <Button style={fabStyle}
                  circular icon="search" color="green" size="huge"
                  onClick={this.onSearchClick.bind(this)} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    openFiltersScreen: () => dispatch(openFiltersScreen())
  }
}

export default connect(null, mapDispatchToProps)(MapScreen)