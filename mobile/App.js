import React from 'react';
import { Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    const { containerStyle, textContainerStyle, mapStyle } = styles

    return (
      <View style={containerStyle}>
        <View style={textContainerStyle}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Text 3</Text>
        </View>

        <View style={mapStyle}>
          <Text>New text</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainerStyle: {
    
  },
  mapStyle: {
    backgroundColor: '#f00'
  }
}