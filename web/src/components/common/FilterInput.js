import React, { Component } from 'react'
import { Search, SearchResult } from 'semantic-ui-react'

class FilterInput extends Component {
  renderResult({ address, name, latitude, longitude }) {
    return (
      <SearchResult title={name}
                    key={`${address}`}
                    description={address} />
    )
  }

  render() {
    const { containerStyle, inputStyle } = styles
    const {
      placeholder,
      isLoading,
      onResultSelect,
      onTextChange,
      results,
      value
    } = this.props

    return (
      <div style={containerStyle}>
        <Search style={inputStyle}
                placeholder={placeholder}
                loading={isLoading}
                onResultSelect={onResultSelect}
                onSearchChange={onTextChange}
                results={results}
                value={value}
                resultRenderer={this.renderResult.bind(this)}
        >
        </Search>
      </div>
    )
  }
}

const styles = {
  containerStyle: {
    marginTop: 20,
    width: '100%',
    marginBottom: 20
  },
  inputStyle: {
    width: '100%'
  }
}

export { FilterInput }