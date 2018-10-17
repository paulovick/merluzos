import React from 'react'

const CenteredContainer = (props) => {
  const {
    outerContainerStyle,
    middleContainerStyle,
    innerContainerStyle
  } = styles
  
  return (
    <div style={outerContainerStyle}>
      <div style={middleContainerStyle}>
        <div style={innerContainerStyle}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

const styles = {
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
    width: '70%'
  }
}

export { CenteredContainer }