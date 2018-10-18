import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { CenteredContainer, CheckboxToggle } from './common'
import { FilterInput } from './common'
import { COLORS } from '../constants'
import { fetchSearch, changeSearchInput, changeRouteType, changeToggle, closeFiltersScreen } from '../actions'

class FilterScreen extends Component {
  constructor(props) {
    super(props)

    this.onRouteTypeChanged.bind(this)
    this.formValid.bind(this)
  }

  onRouteTypeChanged(routeType) {
    this.props.changeRouteType(routeType)
  }

  onFromChange(e, { value }) {
    this.props.fetchSearch('from', value)
  }

  onFromResultSelect(e, { result }) {
    this.props.changeSearchInput('from', result)
  }

  onToChange(e, { value }) {
    this.props.fetchSearch('to', value)
  }

  onToResultSelect(e, { result }) {
    this.props.changeSearchInput('to', result)
  }

  onHealthyToggleClick() {
    this.props.changeToggle('eco')
  }

  onFastToggleClick() {
    this.props.changeToggle('fast')
  }

  formValid() {
    var result = (this.props.fastChecked || this.props.healthyChecked)
              && this.props.routeType
              && this.props.from.selectedValue !== null
              && this.props.to.selectedValue !== null
    
    return result
  }

  onConfirmClick() {
    console.log('confirm')
  }

  onBackClick() {
    console.log('back')
    this.props.closeFiltersScreen()
  }

  render() {
    const {
      containerStyle,
      choiceButtonContainerStyle,
      choiceButtonStyle,
      startButtonContainerStyle,
      backContainerStyle,
      backStyle
    } = styles
    const {
      routeType,
      from,
      to,
      healthyChecked,
      fastChecked
    } = this.props

    const walkBackgroundColor = routeType === 'foot' ? COLORS.Neutral : COLORS.Dark
    const bikeBackgroundColor = routeType === 'bike' ? COLORS.Neutral : COLORS.Dark
    return (
      <div style={containerStyle}>
        <div style={backContainerStyle}>
          <Button style={backStyle}
                  circular icon="arrow left" color="google plus" size="huge"
                  onClick={this.onBackClick.bind(this)} />  { /* TODO: Button back! */ }
        </div>
        <CenteredContainer>
          <div>
            <Button.Group size="huge" style={choiceButtonContainerStyle}>
              <Button style={{...choiceButtonStyle, backgroundColor: walkBackgroundColor}}
                      icon="male"
                      onClick={() => this.onRouteTypeChanged('foot')}/>
              <Button.Or />
              <Button style={{...choiceButtonStyle, backgroundColor: bikeBackgroundColor}}
                      icon="bicycle"
                      onClick={() => this.onRouteTypeChanged('bike')}/>
            </Button.Group>
          </div>

          <FilterInput placeholder="From..."
                       isLoading={from.isLoading}
                       results={from.results}
                       onTextChange={this.onFromChange.bind(this)}
                       onResultSelect={this.onFromResultSelect.bind(this)}
                       value={from.value} />

          <FilterInput placeholder="To..."
                       isLoading={to.isLoading}
                       results={to.results}
                       onTextChange={this.onToChange.bind(this)}
                       onResultSelect={this.onToResultSelect.bind(this)}
                       value={to.value} />

          <div  style={{marginBottom: "3em"}}></div>

          <div>
            <CheckboxToggle label="Healthy route"
                            onClick={this.onHealthyToggleClick.bind(this)}
                            value={healthyChecked} />
          </div>
          <div>
            <CheckboxToggle label="Fast route"
                            onClick={this.onFastToggleClick.bind(this)}
                            value={fastChecked} />
          </div>
          <div style={startButtonContainerStyle}>
              <Button circular disabled={!this.formValid()} icon="location arrow"
                      size="huge" style={{boxShadow: '1px 3px 10px #888'}}
                      onClick={this.onConfirmClick.bind(this)} />
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
  },
  backContainerStyle: {
    position: 'absolute',
    top: 20,
    left: 20
  },
  backStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  }
}

const mapStateToProps = (state) => {
  const { filter } = state
  return {
    routeType: filter.routeType,
    from: {
      isLoading: filter.from.isLoading,
      results: filter.from.results,
      value: filter.from.value,
      selectedValue: filter.from.selectedValue
    },
    to: {
      isLoading: filter.to.isLoading,
      results: filter.to.results,
      value: filter.to.value,
      selectedValue: filter.to.selectedValue
    },
    healthyChecked: filter.healthyChecked,
    fastChecked: filter.fastChecked
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearch: (fieldName, text) => dispatch(fetchSearch(fieldName, text)),
    changeSearchInput: (fieldName, value) => dispatch(changeSearchInput(fieldName, value)),
    changeRouteType: (routeType) => dispatch(changeRouteType(routeType)),
    changeToggle: (toggleName) => dispatch(changeToggle(toggleName)),
    closeFiltersScreen: () => dispatch(closeFiltersScreen())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterScreen);