import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card } from 'semantic-ui-react'
import MapContainer from './MapContainer'
import { openFiltersScreen } from '../actions'
import { LEVELS } from '../constants'

class MapScreen extends Component {
  constructor(props) {
    super(props)

    this.getFastMessage = this.getFastMessage.bind(this)
    this.getEcoMessage = this.getEcoMessage.bind(this)
  }

  onSearchClick() {
    this.props.openFiltersScreen()
  }

  getFastMessage() {
    let message = ''
    if (this.props.fastLevel === null) {
      message = 'Loading...'
    } else {
      console.log(this.props.fastLevel)
      message = LEVELS[this.props.fastLevel].name
    }

    const result = `Fast route air quality: ${message}`
    return result
  }

  getEcoMessage() {
    let message = ''
    if (this.props.ecoLevel === null) {
      message = 'Loading...'
    } else {
      console.log(this.props.ecoLevel)
      message = LEVELS[this.props.ecoLevel].name
    }

    const result = `Eco route air quality: ${message}`
    return result
  }

  render() {
    const {
      alertContainerStyle,
      fabContainerStyle,
      fabStyle,
      cardStyle
    } = style
    
    return (
      <div>
        {/* { this.props.showAlerts &&
          // <div style={alertContainerStyle}>
          //   <Card style={cardStyle}>
          //       {this.getFastMessage()}
          //   </Card>
          //   <Card style={cardStyle}>
          //       {this.getEcoMessage()}
          //   </Card>
          // </div>
        } */}
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
  alertContainerStyle: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    zIndex: 10
  },
  fabContainerStyle: {
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  fabStyle: {
    boxShadow: '1px 3px 10px #888'
  },
  cardStyle: {
    height: 30,
    padding: 5
  }
}

const mapStateToProps = (state) => {
  const { map } = state
  const ecoRoute = map.routes.filter((route) => route.eco)[0]
  const fastRoute = map.routes.filter((route) => !route.eco)[0]

  console.log(ecoRoute);
  console.log(fastRoute);

  let ecoQuality = null
  let fastQuality = null

  if (typeof ecoRoute !== 'undefined' && ecoRoute !== null && !map.isLoadingAir) {
    ecoQuality = ecoRoute.airQualityLevelMax
  }
  if (typeof fastRoute !== 'undefined' && fastRoute !== null && !map.isLoadingAir) {
    fastQuality = fastRoute.airQualityLevelMax
  }

  return {
    ecoLevel: ecoQuality,
    fastLevel: fastQuality,
    showAlerts: map.showAlerts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openFiltersScreen: () => dispatch(openFiltersScreen())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)