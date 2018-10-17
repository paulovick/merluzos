import React, { Component } from 'react'
import { connect } from 'react-redux'

class FilterScreen extends Component {
  render() {
    const { containerStyle } = styles

    return (
      <div style={containerStyle}>
        <p>Filter screen</p>
      </div>
    )
  }
}

const styles = {
  containerStyle: {
    backgroundColor: 'white'
  }
}

export default connect()(FilterScreen);