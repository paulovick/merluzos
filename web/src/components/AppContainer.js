import React, { Component } from 'react'
import { connect } from 'react-redux'
import MapScreen from './MapScreen'
import { SCREENS } from '../constants'

class AppContainer extends Component {
  constructor(props) {
    super(props)

    this.renderCurrentPage = this.renderCurrentPage.bind(this)
  }

  renderCurrentPage() {
    const { currentScreen } = this.props

    if (currentScreen === SCREENS.MapScreen)
    {
      return <MapScreen />
    } else {
      return <div>404 not found</div>
    }
  }

  render() {
    return (
      <div>
        {this.renderCurrentPage()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { screen } = state

  return {
    ...screen
  }
}

export default connect(mapStateToProps)(AppContainer)