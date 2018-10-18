import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { CenteredContainer, CheckboxToggle } from './common'
import { FilterInput } from './common'
import { COLORS } from '../constants'
import { fetchSearch } from '../actions'

class FilterScreen extends Component {
  onFromChange(e, { value }) {
    this.props.fetchSearch('from', value)
  }

  render() {
    const {
      containerStyle,
      choiceButtonContainerStyle,
      choiceButtonStyle,
      startButtonContainerStyle
    } = styles
    const {
      from,
      to
    } = this.props

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

          <FilterInput placeholder="From..."
                       isLoading={from.isLoading}
                       results={from.results}
                       onTextChange={this.onFromChange.bind(this)}
                       value={from.value} />

          <FilterInput placeholder="To..." />

          <div>
            <CheckboxToggle label="Healthy route"></CheckboxToggle>
          </div>
          <div>
            <CheckboxToggle label="Fast route"></CheckboxToggle>
          </div>
          <div style={startButtonContainerStyle}>
              <Button disabled style={{boxShadow: '1px 3px 10px #888'}}>Start</Button>
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
  startButtonContainerStyle: {
    position: 'absolute',
    bottom: "7%",
    right: "15%"
  }
}

const mapStateToProps = (state) => {
  const { filter } = state
  return {
    from: {
      isLoading: filter.from.isLoading,
      results: filter.from.results,
      value: filter.from.value
    },
    to: {
      isLoading: filter.to.isLoading,
      results: filter.to.results,
      value: filter.to.value
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearch: (fieldName, text) => dispatch(fetchSearch(fieldName, text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterScreen);