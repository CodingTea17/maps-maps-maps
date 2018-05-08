import React, { Component } from 'react';
import { Dimensions, Stylesheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const coordinates = [
  {
    latitude: 45.5123755,
    longitude: -122.645831
  },
  {
    latitude: 45.5194324,
    longitude: -122.6364596
  }
];

const GOOGLE_MAPS_APIKEY = '';

class MapsEx extends Component {
  render() {
    return (
      <MapView
        initialRegion={{
          latitude: 45.5123755,
          longitude: -122.645831,
          latitudeDelta: 3,
          longitudeDelta: 3,
        }}
        ref={c => this.mapView = c}
      >
        <MapView.Marker coordinate={coordinates[0]} />
        <MapView.Marker coordinate={coordinates[1]} />
        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="blue"
        />
      </MapView>
    );
  }
}

export default MapsEx;
