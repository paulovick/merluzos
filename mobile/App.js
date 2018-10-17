import React from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';

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
          {/* <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          /> */}
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