import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export const Carte: React.FC = () => {
  return (
    <View style={styles.mapContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: '95%',
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',       // 🟥 indispensable
    margin: 10,
  },
  map: {
    flex: 1,
  },
});
