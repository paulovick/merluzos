import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { CenteredContainer, CheckboxToggle } from './common'
import { FilterInput } from './common'
import { COLORS } from '../constants'

class FilterScreen extends Component {
  render() {
    const {
      containerStyle,
      choiceButtonContainerStyle,
      choiceButtonStyle
    } = styles

    const walkBackgroundColor = COLORS.Dark
    const bikeBackgroundColor = COLORS.Neutral
    return (
      <div style={containerStyle}>
        <CenteredContainer>
          <div>
            <Button.Group size="huge" style={choiceButtonContainerStyle}>
              <Button style={{...choiceButtonStyle, backgroundColor: walkBackgroundColor}}
                      icon="male"/>
              <Button.Or />
              <Button style={{...choiceButtonStyle, backgroundColor: bikeBackgroundColor}}
                      icon="bicycle"/>
            </Button.Group>
          </div>

          <FilterInput placeholder="From..." />

          <FilterInput placeholder="To..." />

          <div>
            <CheckboxToggle label="healthy route"></CheckboxToggle>
          </div>
          <div>
            <CheckboxToggle label="fast route"></CheckboxToggle>
          </div>
        </CenteredContainer>
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
    backgroundColor: COLORS.Dark
  },
  choiceButtonContainerStyle: {
    width: '80%',
    marginBottom: 30
  },
  choiceButtonStyle: {
    backgroundColor: COLORS.Dark,
    color: COLORS.LightText,
    border: '1px solid rgba(0, 0, 0, 0.2)'
  },
  checkboxStyle: {

  }
}

export default connect()(FilterScreen);