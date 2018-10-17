import React from 'react'
import { Search } from 'semantic-ui-react'

const FilterInput = (props) => {
  const { placeholder } = props
  const { containerStyle, inputStyle } = styles

  return (
    <div style={containerStyle}>
      <Search style={inputStyle}
              placeholder={placeholder}
      
      />
    </div>
  );
};

const styles = {
  containerStyle: {
    marginTop: 20,
    width: '100%'
  },
  inputStyle: {
    width: '100%'
  }
}

export { FilterInput }