import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export const Carte: React.FC = () => {
  const [position, setPosition] = useState({
    latitude: 33.5731,
    longitude: -7.5898,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission de localisation refusée');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        region={{
          ...position,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        <Marker
          coordinate={position}
          title="Votre position"
          description="Vous êtes ici"
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
    overflow: 'hidden',
    margin: 10,
  },
  map: {
    flex: 1,
  },
});
