// components/Carte.tsx
import React from 'react';
import {  StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export const Carte: React.FC = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 33.5731,
        longitude: -7.5898,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      <Marker
        coordinate={{ latitude: 33.5731, longitude: -7.5898 }}
        title="Casablanca"
        description="Ville de départ"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: 370,
    height: 300, // plus pratique qu'un plein écran ici
    borderRadius: 20,
  },
});
