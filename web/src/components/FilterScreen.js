import React, { Component } from 'react'
import { connect } from 'react-redux'

class FilterScreen extends Component {
  render() {
    return (
      <div>
        <p>Filter screen</p>
      </div>
    )
  }
}

export default connect()(FilterScreen);