import React, { Component } from 'react'
import { connect } from 'react-redux'


class FilterScreen extends Component {
  render() {
    const { containerStyle, outerContainerStyle, middleContainerStyle, innerContainerStyle } = styles

    return (
      <div style={containerStyle}>
        <div style={outerContainerStyle}>
          <div style={middleContainerStyle}>
            <div style={innerContainerStyle}>
              <p>Centrered</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  containerStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white'
  },
  outerContainerStyle: {
    position: 'absolute',
    display: 'table',
    height: '100%',
    width: '100%'
  },
  middleContainerStyle: {
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  innerContainerStyle: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    textAlign: 'center',
    backgroundColor: 'red',
    width: '80%'
  }
}

export default connect()(FilterScreen);