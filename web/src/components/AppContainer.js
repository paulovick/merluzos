import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Transition } from 'semantic-ui-react'
import MapScreen from './MapScreen'
import FiltersScreen from './FilterScreen'
import { SCREENS } from '../constants'

class AppContainer extends Component {
  constructor(props) {
    super(props)

    this.renderCurrentPage = this.renderCurrentPage.bind(this)
  }

  renderCurrentPage() {
    const { currentScreen } = this.props

    switch(currentScreen) {
      case SCREENS.MapScreen:
        return <MapScreen />
      case SCREENS.FiltersScreen:
        return <FiltersScreen />
      default:
        return <div>404 not found</div>
    }
  }

  render() {
    const { currentScreen } = this.props
    const { filtersContainerStyle } = styles

    const display = currentScreen === SCREENS.FiltersScreen ? null : 'none'
    return (
      <div>
        <MapScreen />

        {/* <div style={{...filtersContainerStyle, display: display}}>
          <Transition.Group animation="fade up" duration={1200} visible={currentScreen === SCREENS.FiltersScreen}>
            <FiltersScreen />
          </Transition.Group>
        </div> */}
        {this.renderCurrentPage()}
      </div>
    )
  }
}

const styles = {
  filtersContainerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
}

const mapStateToProps = (state) => {
  const { screen } = state

  return {
    ...screen
  }
}

export default connect(mapStateToProps)(AppContainer)