import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapsEx from './MapsEx';
import MapView from 'react-native-maps';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Maps is here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
