import React, { Component } from 'react'
import { connect } from 'react-redux'

class AppContainer extends Component {
  render() {
    return (
      <div>
        <p>Apppp</p>
      </div>
    )
  }
}

export default connect()(AppContainer)